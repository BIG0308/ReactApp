import axios from 'axios';

const ajax = axios.create({
    baseURL:'http://127.0.0.1:7001',
    timeout:1000
});

export default ajax;
