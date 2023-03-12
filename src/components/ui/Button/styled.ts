import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const typesVariations = {
  primary: () => css`
    background: #4c4c4c;
    color: #fff;
  `,
  secondary: () => css`
    background: #fff;
    color: #141414;
    &:hover,
    &:active {
      color: #141414;
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  ${({ variant }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    padding: 0 1.6rem;
    border: 0;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      pointer-events: all;
      opacity: 0.2;
    }

    ${!!variant && typesVariations[variant]}
  `}
`;
