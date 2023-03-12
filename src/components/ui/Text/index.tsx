import styled from 'styled-components';

type TextProps = {
  children: React.ReactNode;
  small?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const StyledText = styled.p<TextProps>`
  font-size: ${({ small }) => (small ? '1rem' : '1.5rem')};
  font-weight: 500;
  color: #000;
`;

const Text = ({ children, small = false, ...rest }: TextProps) => {
  return (
    <StyledText small={small} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
