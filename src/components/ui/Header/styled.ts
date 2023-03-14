import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.4rem;
  padding: 0 1.6rem;
  background-color: #6f9286;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  gap: 0.5rem;
  text-transform: capitalize;

  & > span {
    color: #62d9b1;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;
