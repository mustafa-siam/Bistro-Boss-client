import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const usePublicAxios = () => {
  return axiosinstance; 
};

export default usePublicAxios;