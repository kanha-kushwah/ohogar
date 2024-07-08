import axios from 'axios';
import useToken from './useToken';
import { useEffect, useMemo } from 'react';

const useAxiosInstance = () => {
  const token = useToken();

  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: 'https://ohoger.turtlesoftsolution.com/admin/public',
    });
  }, []);

  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token, axiosInstance]);

  return axiosInstance;
};

export default useAxiosInstance;
