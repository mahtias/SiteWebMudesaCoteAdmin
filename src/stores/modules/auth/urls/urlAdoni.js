import axios from 'axios'

 export default axios.create({
    baseURL: 'http://localhost:4000/api/auth'
   //baseURL: 'https://agosoftprojet.com/api/auth'

})

