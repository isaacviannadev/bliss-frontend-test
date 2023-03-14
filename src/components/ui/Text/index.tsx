import styled from 'styled-components';

type TextProps = {
  children: React.ReactNode;
  small?: boolean;
  capitalize?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const StyledText = styled.p<TextProps>`
  font-size: ${({ small }) => (small ? '1rem' : '1.5rem')};
  font-weight: 500;
  color: #000;
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
`;

export const Text = ({
  children,
  small = false,
  capitalize = false,
  ...rest
}: TextProps) => {
  return (
    <StyledText small={small} capitalize={capitalize} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
