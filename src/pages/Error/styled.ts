import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 5rem;
`;

export const ErrorTitle = styled.h1`
  font-weight: 700;
  color: #000;
`;

export const ErrorDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  a {
    color: #f25656;
    text-decoration: none;
  }
`;
