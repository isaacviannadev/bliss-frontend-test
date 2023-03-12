import { useMatches, useSearchParams } from 'react-router-dom';
import { capitalize } from '../../../helpers';
import Text from '../../ui/Text';
import { crossPathname } from '../helpers';
import { HeaderContainer } from './styled';

const Header = () => {
  const [matches] = useMatches();
  const [searchParams] = useSearchParams();
  const params = searchParams.get('filter');

  console.log('matches', matches, params);

  const currentPage = capitalize(crossPathname(matches.pathname));

  return (
    <HeaderContainer>
      <Text>{currentPage}</Text>
    </HeaderContainer>
  );
};

export default Header;
