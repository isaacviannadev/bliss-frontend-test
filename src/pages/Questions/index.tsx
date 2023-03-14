import { ListPlus } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderSearch, Question } from '../../components/molecules';
import { Button, Text } from '../../components/ui';
import { QuestionProps } from '../../types/question';
import { QuestionsContainer } from './styled';

export const QuestionsPage = () => {
  const { search } = useLocation();
  const [questionList, setQuestionList] = useState<QuestionProps[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const params = search.split('=')[1];
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const showMore = () => {
    setOffset(offset + 10);
  };

  const seeDetails = (question_id: number) => {
    return navigate(`/questions/${question_id}`);
  };

  useEffect(() => {
    fetch(
      `${baseURL}/questions?limit=10?offset=${offset}${
        params && params !== '' ? `&filter=${params}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestionList(data);
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  }, [search, offset]);

  return (
    <>
      <HeaderSearch />

      <QuestionsContainer>
        {questionList.map((item) => (
          <Question
            key={item.id}
            question={item}
            handleClick={(id: number) => seeDetails(id)}
          />
        ))}
        {offset < questionList.length ? (
          <Button
            icon={<ListPlus size={22} />}
            variant='secondary'
            onClick={showMore}
          >
            Show more
          </Button>
        ) : (
          <Text>That's all folks!</Text>
        )}
      </QuestionsContainer>
    </>
  );
};
