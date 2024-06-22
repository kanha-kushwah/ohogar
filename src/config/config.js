import axios from 'axios';

const BASE_URL = axios.create({
    baseURL: 'https://ohoger.turtlesoftsolution.com/admin/public' 
});

export default BASE_URL;
