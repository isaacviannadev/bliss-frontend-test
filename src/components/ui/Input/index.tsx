import { XCircle } from '@phosphor-icons/react';
import {
  StyledClearButton,
  StyledIcon,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from './styled';

type InputType = 'text' | 'number' | 'email' | 'password';

type InputProps = {
  id: string;
  type: InputType;
  label?: string;
  icon?: JSX.Element;
  isSearch?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  id,
  type = 'text',
  label,
  isSearch = false,

  icon,
  ...rest
}: InputProps) => {
  const handleClear = () => {
    if (rest.onChange) {
      rest.onChange({
        target: {
          value: '',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInputWrapper>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        <StyledInput id={id} type={type} value={rest.value} {...rest} />
        {isSearch && rest.value && (
          <StyledClearButton onClick={handleClear}>
            <XCircle size={22} />
          </StyledClearButton>
        )}
      </StyledInputWrapper>
    </>
  );
};

export default Input;
