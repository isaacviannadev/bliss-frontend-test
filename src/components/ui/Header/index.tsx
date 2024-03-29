import { HeaderContainer, HeaderTitle } from './styled';

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

Header.Title = HeaderTitle;

export default Header;
