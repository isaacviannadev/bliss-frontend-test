import { CaretLeft } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import {
  ProgressBar,
  ShareScreenModal,
  VoteModal,
} from '../../components/molecules';
import { ActionsContainer } from '../../components/molecules/HeaderSearch/styled';
import { Button, Header } from '../../components/ui';
import { ChoiceProps, QuestionProps } from '../../types/question';
import {
  BackButton,
  DetailContainer,
  OptionButton,
  OptionsDetail,
  QuestionDetail,
  QuestionImage,
  QuestionInfo,
} from './styled';

const Detail = () => {
  const { question_id } = useParams<{ question_id: string }>();
  const [question, setQuestion] = useState<QuestionProps>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenVoteModal, setIsOpenVoteModal] = useState<boolean>(false);
  const [votedChoice, setVotedChoice] = useState<ChoiceProps>({
    choice: '',
    votes: 1,
  });

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const navigateBack = () => {
    return history.back();
  };

  const toggleModal = () => {
    setIsOpen((state) => !state);
  };

  const toggleVoteModal = (choice: ChoiceProps) => {
    setVotedChoice(choice);

    return setIsOpenVoteModal((state) => !state);
  };

  const updateQuestion = async (question: QuestionProps) => {
    const payload: QuestionProps = {
      ...question,
      choices: question.choices.map((choice) => {
        if (choice.choice === votedChoice.choice) {
          return { ...choice, votes: 1 };
        }

        return { ...choice, votes: 0 };
      }),
    };
    await fetch(`${baseURL}/questions/${question_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ payload }),
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
        setIsOpenVoteModal(false);
        toast.success('Vote confirmed!');
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetch(`${baseURL}/questions/${question_id}`)
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  }, [question_id]);

  return (
    <>
      <Header>
        <Header.Title>
          <BackButton onClick={navigateBack}>
            <CaretLeft size={32} weight='bold' />
          </BackButton>
          Question <span>detail</span>
        </Header.Title>

        <ActionsContainer>
          <Button variant='primary' size='small' onClick={toggleModal}>
            Share
          </Button>
        </ActionsContainer>
      </Header>
      <DetailContainer>
        <QuestionDetail>
          <QuestionImage src={question?.image_url} alt={question?.question} />
          <QuestionInfo>
            <h1>{question?.question}</h1>

            <OptionsDetail>
              {question?.choices.map((choice, index) => (
                <OptionButton
                  key={choice.choice + index}
                  onClick={() => toggleVoteModal(choice)}
                >
                  <ProgressBar currentValue={choice.votes} />
                  <p>{choice.choice}</p>
                  <p>{choice.votes}</p>
                </OptionButton>
              ))}
            </OptionsDetail>
          </QuestionInfo>
        </QuestionDetail>
      </DetailContainer>
      <ShareScreenModal isOpen={isOpen} onClose={toggleModal} />
      <VoteModal
        isOpen={isOpenVoteModal}
        choice={votedChoice}
        onClose={() => setIsOpenVoteModal(false)}
        confirmVote={() => updateQuestion(question!)}
      />
    </>
  );
};

export default Detail;
