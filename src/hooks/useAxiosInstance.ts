import axios from 'axios';

type Props = {
  baseURL: string;
};

const useAxiosInstance = ({ baseURL }: Props) => {
  const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
  });

  axiosInstance.defaults.headers.common = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  return axiosInstance;
};

export default useAxiosInstance;
