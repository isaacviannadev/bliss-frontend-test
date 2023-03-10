import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

type DataProps = {
  status: string;
};

export const App = () => {
  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetch(
      'https://private-anon-e72c07c1fc-blissrecruitmentapi.apiary-mock.com/health'
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <h1> Error: {error.message}</h1>;

  return <h1>Hello Bliss: Status is {data?.status}</h1>;
};

export default App;
