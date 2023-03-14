import { EnvelopeSimple, Link, PaperPlaneTilt } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { validateEmail } from '../../../utils';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Text from '../../ui/Text';

import Modal from '../Modal';
import {
  ShareScreenBody,
  ShareScreenContent,
  ShareScreenTitle,
} from './styled';

type ShareScreenModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ShareScreenModal = ({
  isOpen = false,
  onClose,
}: ShareScreenModalProps) => {
  const [email, setEmail] = useState<string>('');

  const closeAndClear = () => {
    setEmail('');
    onClose();
  };

  const handleShare = async () => {
    const url = window.location.href;

    await fetch(
      `https://private-0672e-blissrecruitmentapi.apiary-mock.com/share?destination_email=${email}&content_url=${url}`,
      {
        method: 'POST',
      }
    )
      .then((response) => {
        if (response.status === 200) {
          toast.success('Screen shared successfully');
        } else {
          toast.error('Something went wrong');
        }
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        closeAndClear();
      });
  };

  useEffect(() => {
    if (isOpen) {
      const input = document.getElementById('email') as HTMLInputElement;
      input.focus();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeAndClear}>
      <ShareScreenContent>
        <ShareScreenTitle>
          Share screen <PaperPlaneTilt size={22} />
        </ShareScreenTitle>

        <ShareScreenBody>
          <Text>Who do you want to send it to?</Text>

          <Input
            id='email'
            icon={<EnvelopeSimple size={22} />}
            type='email'
            placeholder='jhondoe@xyz.com'
            value={email}
            onChange={({ target: { value } }) => {
              setEmail(value);
            }}
          />
          <Input
            id='Url'
            icon={<Link size={22} />}
            type='text'
            defaultValue={window.location.href}
            readOnly
          />
        </ShareScreenBody>
        <Button
          size='small'
          variant='primary'
          disabled={!validateEmail(email)}
          onClick={handleShare}
        >
          Share screen
        </Button>
      </ShareScreenContent>
    </Modal>
  );
};

export default ShareScreenModal;
