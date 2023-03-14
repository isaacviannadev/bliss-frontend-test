import { X } from '@phosphor-icons/react';
import Text from '../../ui/Text';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  StyledModal,
} from './styled';

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Modal = ({ children, isOpen, onClose, title = '' }: ModalProps) => {
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <StyledModal isOpen={isOpen} role='dialog' onKeyDown={handleKey}>
      <ModalContent>
        <ModalHeader>
          <Text>{title}</Text>
          <ModalCloseButton onClick={onClose}>
            <X size={22} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
