import React from 'react';
import styled from 'styled-components';

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledCard = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 1.2rem;
  border: 1px solid #eaeaea;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  &:focus-within,
  &:focus {
    outline: none;
    border: 1px solid #62d9b1;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

export const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
