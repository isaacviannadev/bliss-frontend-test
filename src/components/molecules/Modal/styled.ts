import styled from 'styled-components';
import { ModalProps } from '.';

type StyledModalProps = Pick<ModalProps, 'isOpen'>;

export const StyledModal = styled.div<StyledModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.4rem);
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 100%;
  max-height: 300px;
  background: #fff;
  border-radius: 1.4rem;
  border: 1px solid #62d9b1;
  box-shadow: 0 3px 12px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    max-height: 100%;
    max-width: 100%;

    border-radius: 0;
    justify-content: space-between;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #62d9b1;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  cursor: pointer;

  svg {
    fill: #256651;
    transition: all 0.2s ease-in-out;

    &:hover {
      fill: #62d9b1;
      transform: scale(1.1);
    }
  }
`;

export const ModalBody = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 400px;

  overflow-y: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #62d9b1;

    &:hover {
      background: #256651;
    }
  }
  @media (max-width: 768px) {
    max-height: 100%;
    border-radius: 0;
    justify-content: space-between;
  }
`;
