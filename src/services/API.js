import axios from "axios"

// 05868670/json/

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
})

export default api