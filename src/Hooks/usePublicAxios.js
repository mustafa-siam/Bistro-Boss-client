import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://localhost:5000/",
});

const usePublicAxios = () => {
  return axiosinstance; 
};

export default usePublicAxios;