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
  noClose?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal = ({
  children,
  isOpen,
  onClose,
  title = '',
  noClose = false,
}: ModalProps) => {
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape' && !noClose) {
      onClose();
    }
  };

  return (
    <StyledModal isOpen={isOpen} role='dialog' onKeyDown={handleKey}>
      <ModalContent>
        <ModalHeader>
          <Text>{title}</Text>
          {!noClose && (
            <ModalCloseButton onClick={onClose}>
              <X size={22} />
            </ModalCloseButton>
          )}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
