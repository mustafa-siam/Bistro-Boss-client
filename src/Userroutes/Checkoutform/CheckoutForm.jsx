import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import useCarts from '../../Hooks/UseCarts';
import { authcontext } from '../../provider/Authprovider';
import moment from 'moment/moment';

const CheckoutForm = () => {
    const [error,seterror]=useState("")
    const [clientSecret,setclientSecret]=useState("")
    const [transactionid,settransactionid]=useState("")
    const stripe=useStripe()
    const elements=useElements()
    const axiossecure=useAxiosSecure();
    const {user}=useContext(authcontext)
    const [cart]=useCarts();
    const totalprice=cart.reduce((total,item)=>total+item.price,0)
    useEffect(()=>{
      axiossecure.post('create-payment-intent',{price:totalprice})
      .then(res=>{
        console.log(res.data.clientSecret)
        setclientSecret(res.data.clientSecret)
      })
    },[axiossecure,totalprice])
    const handlesubmit=async(e)=>{
      e.preventDefault();
      if(!stripe || !elements){
        return;
      }
      const card=elements.getElement(CardElement)
       if (card == null) {
      return;
    }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      seterror(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      seterror("")
    }
    //confirm payment
    const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email:user?.email || "anonymous",
          name:user?.displayName||'anonymous'
        }
      }
    })
    if(confirmError){
      console.log('confirm error')
    }
    else{
      console.log('payment intent',paymentIntent)
      if(paymentIntent.status==='succeeded'){
        console.log('transactionid',paymentIntent.id)
        settransactionid(paymentIntent.id)
        //now save payment in database
        const payment={
          email:user.email,
          price:totalprice,
          transactionid:paymentIntent.id,
          date:moment().format('dddd,MMMM Do YYYY'),
          cartIds:cart.map(item=>item._id),
          menuitemids:cart.map(item=>item.menuid),
          status:'pending'
        }
        const res=await axiossecure.post('payments',payment)
        console.log('payments saved',res.data)
      }
    }
  }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <CardElement
                     options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className='text-red-600'>{error}</p>
      <button className='btn btn-primary' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
            </form>
        </div>
    );
};

export default CheckoutForm;