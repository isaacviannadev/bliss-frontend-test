import React from 'react';
import { StyledButton } from './styled';

export type TypesOfVariants = 'primary' | 'secondary';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: TypesOfVariants;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'primary',
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      type='button'
      role='button'
      tabIndex={0}
      {...rest}
    >
      {!!icon && icon}
      {children}
    </StyledButton>
  );
};

export default Button;
