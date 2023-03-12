import styled from 'styled-components';

export const QuestionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.4rem;
  padding: 7rem 1.4rem 1.4rem;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 0;

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
`;

export const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
`;

export const QuestionTitle = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: 100%;
  gap: 0.5rem;
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 1.2rem;
    border: 1px solid #62d9b1;
    border-radius: 0.8rem;
    padding: 0.8rem 1.2rem;
    background-color: #7ffed4;
  }
`;
