import React from 'react';
import Header from './header';
import { LayoutContainer } from './styled';

export const withLayout =
  (Component: React.FC) =>
  ({ ...props }: any) => {
    return (
      <LayoutContainer>
        <Header />
        <Component {...props} />
      </LayoutContainer>
    );
  };

export default withLayout;
