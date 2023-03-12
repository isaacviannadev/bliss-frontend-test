import { useNavigate } from 'react-router-dom';
import { LoadingContainer } from './styled';

const Loading = () => {
  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_BASE_URL;

  const healthCheck = async () => {
    const response = await fetch(`${baseURL}/health`);

    const data = await response.json();

    if (data.status === 'OK') {
      return navigate('/questions');
    }

    return navigate('/api-error');
  };

  healthCheck();

  return (
    <LoadingContainer>
      <h1>Loading...</h1>
    </LoadingContainer>
  );
};

export default Loading;
