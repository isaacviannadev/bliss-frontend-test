import { createBrowserRouter } from 'react-router-dom';
import withLayout from '../components/layout';
import ErrorPage from '../pages/Error';
import Loading from '../pages/Loading';
import { QuestionsPage } from '../pages/Questions';

const Question = withLayout(QuestionsPage);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loading />,
  },
  {
    path: '/questions',
    element: <Question />,
    shouldRevalidate: ({ currentUrl }) => {
      console.log('revalidate', currentUrl.pathname);
      return currentUrl.pathname === '/questions';
    },
  },
  {
    path: '/questions?filter',
    element: <div>Questions with filter 1</div>,
  },
  {
    path: '/api-error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Loading />,
  },
]);

export default router;
