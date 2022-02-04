import axios from 'axios'
import store from "@/store/store.js"
import env from './env.js';
const domain = env.appurl

let ax =  axios.create({
  baseURL:domain,
  headers:{ 
    Authorization: 'Bearer '+store.state.AppActiveUser.token || '' 
  },
})
ax.interceptors.response.use(function (response) {
  return response;
}, function (error) {

   if(error.response.status === 401){
     window.location.href="login"
   }
  return Promise.reject(error);
}); 

export default ax