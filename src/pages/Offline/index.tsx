import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components/ui';
import { useVerifyConnection } from '../../hooks/useVerifyConnection';
import { ErrorContainer, ErrorDescription, ErrorTitle } from '../Error/styled';

const Offline = () => {
  const isConnected = useVerifyConnection();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate(-1);
    }
  }, [isConnected]);

  return (
    <ErrorContainer>
      <ErrorTitle>Ooops... 📡 </ErrorTitle>

      <ErrorDescription>
        <p>
          It seems that you are{' '}
          <strong style={{ color: '#f25656 ' }}> offline! </strong>
        </p>

        <Text small>
          Please, check your internet connection and try again.{' '}
        </Text>

        <Text> Thank you! </Text>
      </ErrorDescription>
    </ErrorContainer>
  );
};

export default Offline;
