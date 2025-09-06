import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../Checkoutform/CheckoutForm';

const Payment = () => {
    const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
    return (
       <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
       </Elements>
    );
};

export default Payment;