import { createBrowserRouter, Navigate } from 'react-router-dom';
import withLayout from '../components/LayoutHOC';
import Detail from '../pages/Detail';
import ErrorPage from '../pages/Error';
import Loading from '../pages/Loading';
import Offline from '../pages/Offline';
import { QuestionsPage } from '../pages/Questions';

const Questions = withLayout(QuestionsPage);
const QuestionDetail = withLayout(Detail);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loading />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/questions',
    element: <Questions />,
  },
  {
    path: '/questions/:question_id',
    element: <QuestionDetail />,
  },
  {
    path: '/error-page',
    element: <ErrorPage />,
  },
  {
    path: '/offline',
    element: <Offline />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export default router;
