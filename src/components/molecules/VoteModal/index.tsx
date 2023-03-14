import { Ticket } from '@phosphor-icons/react';
import { ChoiceProps } from '../../../types/question';
import Button from '../../ui/Button';
import Modal from '../Modal';
import { ShareScreenTitle } from '../ShareScreenModal/styled';
import { VoteModalActions, VoteModalContent } from './styled';

export type VoteModalProps = {
  isOpen: boolean;
  choice: ChoiceProps;
  onClose: () => void;
  confirmVote: () => void;
};

export const VoteModal = ({
  isOpen,
  choice,
  onClose,
  confirmVote,
}: VoteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VoteModalContent>
        <ShareScreenTitle>
          Your vote <Ticket size={32} />
        </ShareScreenTitle>

        <p>
          Are you sure you want to vote for <strong>{choice.choice}</strong>?
        </p>

        <VoteModalActions>
          <Button variant='danger' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={confirmVote}>
            Confirm
          </Button>
        </VoteModalActions>
      </VoteModalContent>
    </Modal>
  );
};

export default VoteModal;
