import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import withLayout from '../components/LayoutHOC';
import Detail from '../pages/Detail';
import ErrorPage from '../pages/Error';
import Loading from '../pages/Loading';
import { QuestionsPage } from '../pages/Questions';

const Questions = withLayout(QuestionsPage);

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<Loading />} />,
    <Route path='/questions' element={<Questions />} />,
    <Route path='/questions/:id' element={<Detail />} />,
    <Route path='*' element={<ErrorPage />} />,
  ])
);

export default router;
