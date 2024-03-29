import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 0;
  outline: none;

  &::after {
    content: ' 🤔 Click to see details ';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    position: absolute;
    background-color: #7ffed4;
    font-weight: 700;
    bottom: -100%;
    height: 50%;
    box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 0.8rem;
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  &:hover {
    cursor: pointer;
    &::after {
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &::after {
      display: none;
    }
  }
`;

export const QuestionImageWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 14rem;
  height: auto;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 8rem;
  }
`;

export const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  padding: 0.8rem 1.6rem;
`;

export const QuestionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }
  }
`;

export const QuestionLineInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const QuestionInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.4rem;
  color: #979797;
`;

export const QuestionChoices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    font-size: 1.2rem;
    border: 1px solid #62d9b1;
    border-radius: 0.8rem;
    padding: 0.8rem 1.2rem;
    background-color: #7ffed4;
  }

  @media (max-width: 768px) {
    p {
      padding: 0.8rem 1rem;
    }
  }
`;
