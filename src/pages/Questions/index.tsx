import { FilePlus, SealQuestion } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import withLayout from '../../components/layout';
import Card from '../../components/ui/Card';
import { getFormattedDate } from '../../helpers';
import { QuestionProps } from '../../types/question';
import {
  QuestionChoices,
  QuestionContent,
  QuestionImageWrapper,
  QuestionInfoItem,
  QuestionLineInfo,
  QuestionsContainer,
  QuestionTitle,
  QuestionWrapper,
} from './styled';

export const QuestionsPage = () => {
  const [searchParams] = useSearchParams();
  const [list, setList] = useState<QuestionProps[]>([]);
  const [params, setParams] = useState<string>(
    searchParams.get('filter') || ''
  );

  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(
      `${baseURL}/questions?limit=5?offset=5${
        params && params !== '' ? `&filter=${params}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, [params]);

  return (
    <QuestionsContainer>
      {list.map((item) => (
        <Card key={item.id}>
          <QuestionWrapper>
            <QuestionImageWrapper>
              <img src={item.thumb_url} alt={item.question} />
            </QuestionImageWrapper>

            <QuestionContent>
              <QuestionTitle>
                <QuestionLineInfo>
                  <QuestionInfoItem>
                    <SealQuestion size={22} />
                    <p>Question {item.id}</p>
                  </QuestionInfoItem>
                  <QuestionInfoItem>
                    <FilePlus size={22} />
                    <p>{getFormattedDate(item.published_at)}</p>
                  </QuestionInfoItem>
                </QuestionLineInfo>
                <h2>{item.question}</h2>
              </QuestionTitle>
              <QuestionChoices>
                {item.choices.map((choice, index) => (
                  <p>{choice.choice}</p>
                ))}
              </QuestionChoices>
            </QuestionContent>
          </QuestionWrapper>
        </Card>
      ))}
    </QuestionsContainer>
  );
};

export default withLayout(QuestionsPage);
