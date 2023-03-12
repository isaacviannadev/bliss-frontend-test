import { Link } from 'react-router-dom';
import Text from '../../components/ui/Text';
import { ErrorContainer, ErrorDescription, ErrorTitle } from './styled';

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>Ooops... 🫠 </ErrorTitle>

      <ErrorDescription>
        <Text>
          It seems that the server is <strong> not OK! </strong>
        </Text>

        <Text>
          Please,<Link to={'/'}> try load again.</Link>{' '}
        </Text>

        <Text small>
          If the problem persists, please contact the administrator.{' '}
        </Text>

        <Text> Thank you! </Text>
      </ErrorDescription>
    </ErrorContainer>
  );
};

export default ErrorPage;
