import axios from "axios";
import Cookies from 'js-cookie'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use(
    (config) => {
        let access_token = Cookies.get('access_token')
        if(access_token && access_token != null) {
            config.headers['Authorization'] = `Bearer ${access_token}`
        }
        return config
    }
)


export default api

