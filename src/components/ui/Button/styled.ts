import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const typesVariations = {
  primary: () => css`
    background: #57b194;
    color: #fff;
  `,
  secondary: () => css`
    background: #e7f3ef;
    color: #57b194;
  `,
  share: () => css`
    background: #fff;
    color: #57b194;
  `,
  danger: () => css`
    background: #ed5449;
    color: #fff;
    border: 1px solid #e79b95;
    padding: 0 1rem;
  `,
};

const sizesVariations = {
  small: () => css`
    height: 3.6rem;
    font-size: 1.4rem;
    padding: 0 1.6rem;
  `,
  medium: () => css`
    height: 4.8rem;
    font-size: 1.6rem;
    padding: 0 1.6rem;
  `,
  large: () => css`
    height: 5.6rem;
    font-size: 1.8rem;
    padding: 0 1.8rem;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  ${({ variant, size }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.8rem;
    border-radius: 0.8rem;
    border: 1px solid #256651;
    white-space: nowrap;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      pointer-events: all;
      opacity: 0.2;
    }

    &:hover {
      filter: brightness(0.88);
    }

    ${!!size && sizesVariations[size]}
    ${!!variant && typesVariations[variant]}
  `}
`;
