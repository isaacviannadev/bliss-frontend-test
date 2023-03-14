import styled from 'styled-components';

export const ShareScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1rem;
`;

export const ShareScreenTitle = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  color: #141414;

  svg {
    fill: #57b194;
  }
`;

export const ShareScreenBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  gap: 1rem;
`;
