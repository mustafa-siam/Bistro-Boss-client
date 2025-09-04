import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authcontext } from "../provider/Authprovider";

const axiosinstance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const {logout}=useContext(authcontext)
  const navigate=useNavigate()
  axiosinstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token=localStorage.getItem('access-token');
    //console.log("requset stopped by interceptor",token)
    config.headers.authorization=`bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  })
  //intercepts 401 and 403 status
  axiosinstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },async(error)=>{
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status=error.response.status
   // console.log('status error in the interceptor',status)
    if(status===401 || status===403){
      await logout()
           navigate('/login')
    }
    return Promise.reject(error);
  });
  return axiosinstance; 
};

export default useAxiosSecure;