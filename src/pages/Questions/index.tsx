import { ListPlus } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import withLayout from '../../components/LayoutHOC';
import Question from '../../components/molecules/Question';
import Button from '../../components/ui/Button';
import Text from '../../components/ui/Text';
import { QuestionProps } from '../../types/question';
import { QuestionsContainer } from './styled';

export const QuestionsPage = () => {
  const { search } = useLocation();
  const [questionList, setQuestionList] = useState<QuestionProps[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const params = search.split('=')[1];
  const baseURL = import.meta.env.VITE_BASE_URL;

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
  );
};

export default withLayout(QuestionsPage);
