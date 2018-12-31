import axios from 'axios'

const client = axios.create({
  baseURL: 'http://ec2-3-17-70-140.us-east-2.compute.amazonaws.com:3000/',
  timeout: 30000
})

export default (url, method ) => client.request({ url, method })
