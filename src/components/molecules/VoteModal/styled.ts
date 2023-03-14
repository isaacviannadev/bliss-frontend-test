import styled from 'styled-components';

export const VoteModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1rem;

  p {
    font-size: 1.8rem;

    strong {
      position: relative;
      color: #4a7667;
    }
  }
`;

export const VoteModalActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;
