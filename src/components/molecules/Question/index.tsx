import { FilePlus, SealQuestion } from '@phosphor-icons/react';
import { getFormattedDate } from '../../../helpers';
import { QuestionProps } from '../../../types/question';
import Card from '../../ui/Card';
import {
  QuestionChoices,
  QuestionContent,
  QuestionImageWrapper,
  QuestionInfoItem,
  QuestionLineInfo,
  QuestionTitle,
  QuestionWrapper,
} from './styled';

type SingleQuestionProps = {
  question: QuestionProps;
  handleClick: (id: number) => void;
};

const Question = ({ question, handleClick }: SingleQuestionProps) => {
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      handleClick(question.id);
    }
  };

  return (
    <Card>
      <QuestionWrapper
        onKeyDown={handleKey}
        onClick={() => handleClick(question.id)}
        tabIndex={1}
      >
        <QuestionImageWrapper>
          <img src={question.thumb_url} alt={question.question} />
        </QuestionImageWrapper>

        <QuestionContent>
          <QuestionTitle>
            <QuestionLineInfo>
              <QuestionInfoItem>
                <SealQuestion size={22} />
                <p>Question {question.id}</p>
              </QuestionInfoItem>
              <QuestionInfoItem>
                <FilePlus size={22} />
                <p>{getFormattedDate(question.published_at)}</p>
              </QuestionInfoItem>
            </QuestionLineInfo>
            <h2>{question.question}</h2>
          </QuestionTitle>
          <QuestionChoices>
            {question.choices.map((choice, index) => (
              <p key={choice.choice + index}>{choice.choice}</p>
            ))}
          </QuestionChoices>
        </QuestionContent>
      </QuestionWrapper>
    </Card>
  );
};

export default Question;
