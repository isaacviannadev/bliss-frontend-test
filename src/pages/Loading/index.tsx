import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LoadingContainer } from './styled';

const Loading = () => {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseURL}/health`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          toast.success('API is up and running!');
          return navigate('/questions');
        }
      })
      .catch((error: Error) => {
        toast.error(error.message);
        return navigate('/error-page');
      });
  }, []);

  return (
    <LoadingContainer>
      <h1>Loading...</h1>
    </LoadingContainer>
  );
};

export default Loading;
