import React from 'react';
import HeaderSearch from './HeaderSearch';
import { LayoutContainer } from './styled';

export const withLayout =
  (Component: React.FC) =>
  ({ ...props }: any) => {
    return (
      <LayoutContainer>
        <HeaderSearch />
        <Component {...props} />
      </LayoutContainer>
    );
  };

export default withLayout;
