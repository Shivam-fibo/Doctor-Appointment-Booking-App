import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosCLient = axios.create({
    baseURL: 'http://localhost:1337/api/sliders',
    headers:{
        'Authorization' : `Bearer ${API_KEY}`
    }
})

const getCategory = () => axiosCLient.get('categories?populate=*');

export default{
    getCategory
}