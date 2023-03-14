import React from 'react';
import { StyledButton } from './styled';

export type TypesOfVariants = 'primary' | 'secondary' | 'share' | 'danger';
export type TypesOfSizes = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: TypesOfVariants;
  icon?: React.ReactNode;
  size?: TypesOfSizes;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  icon,
  size = 'medium',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      type='button'
      role='button'
      tabIndex={0}
      size={size}
      {...rest}
    >
      {!!icon && icon}
      {children}
    </StyledButton>
  );
};

export default Button;
