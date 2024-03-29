import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  padding-top: 7.6rem;
  position: relative;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const QuestionDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 80rem;
  height: fit-content;
  gap: 1rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const QuestionImage = styled.img`
  height: auto;
  width: 100%;
  border-radius: 1rem;
`;

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 2rem 1rem;
  justify-content: start;
  min-width: 30rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
    width: 100%;

    h1 {
      font-size: 2.4rem;
    }
  }
`;

export const OptionsDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  padding: 2rem 0;
`;

export const OptionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #256651;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  z-index: 1;

  &::before {
    content: 'Vote❓';
    position: absolute;
    right: -5rem;
    top: 50%;
    transform: translateY(-55%);
    font-size: 1.4rem;
    color: #256651;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background-color: #62d9b1;
  }

  &:hover::before {
    right: -6rem;
    opacity: 1;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }

    &:hover::before {
      display: none;
    }
  }
`;
