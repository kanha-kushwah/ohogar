import { useSelector } from 'react-redux';

const useToken = () => {
  const token = useSelector((state) => state.addtoken.token);
  return token;
};

export default useToken;
