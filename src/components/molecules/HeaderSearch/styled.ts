import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 40rem;

  position: fixed;
  right: 50%;
  transform: translateX(50%);

  @media (max-width: 768px) {
    position: unset;
    transform: unset;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 14rem;
  position: fixed;
  right: 1.6rem;

  gap: 0.5rem;

  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    bottom: 1.6rem;
    right: 1.6rem;
    width: 8rem;
  }
`;
