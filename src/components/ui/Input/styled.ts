import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.6rem;
  width: 100%;
  border: 1px solid #62d9b1;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &:focus-within {
    border: 1px solid #256651;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  padding: 0 1.6rem;
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 100%;
  background-color: #baebdb;

  svg {
    fill: #4a7667;
  }

  ${StyledInputWrapper}:focus-within & {
    background-color: #62d9b1;

    svg {
      fill: #fff;
    }
  }
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 0 0.8rem;
  color: #141414;
  outline: none;

  &::placeholder {
    color: #cbc9c9;
  }

  &:read-only {
    cursor: not-allowed;
    background-color: #f3f3f3;
    pointer-events: none;
  }
`;

export const StyledClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    fill: #57b194;
  }

  &:hover svg {
    fill: #e14b4b;
  }
`;
