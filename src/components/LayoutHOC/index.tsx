import React from 'react';
import { Navigate } from 'react-router-dom';
import { useVerifyConnection } from '../../hooks/useVerifyConnection';
import { LayoutContainer } from './styled';

export const withLayout =
  (Component: React.FC) =>
  ({ ...props }: any) => {
    const isConnected = useVerifyConnection();

    if (!isConnected) {
      return <Navigate to='/offline' replace />;
    }

    return (
      <LayoutContainer>
        <Component {...props} />
      </LayoutContainer>
    );
  };

export default withLayout;
