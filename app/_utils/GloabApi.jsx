import axios from "axios";

const API_KEY = '3c93bef61e6d34160fce73f74181e4b485d366ed0994bfcf8351bed02fc38c2a7e9c909ef858291c86c5b22507e9cc61ba715ba23e57cefe306cfe86b4387e62b705c69fa67871379b30c3c9e15df8ab47cec114ed7ab4a85560867d4697d24a92c03492f5283b8e33ebb4c7199ec472cc92dcb2ea7f490d71c52b5a34d9174e'



const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api'
});
const getCategory =  () => axiosClient.get('/sliders?populate=*');

const getDoctor = () => axiosClient.get('/doctors?populate=*');

const getDoctorByCategory = (category) => 
  axiosClient.get(`/doctors?filters[sliders][id][$in]=${category}&populate=*`);
console.log(getDoctorByCategory);
export default {
  getCategory,
  getDoctor,
  getDoctorByCategory
};
