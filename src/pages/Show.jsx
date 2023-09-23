import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

//Custom Hooks => Can be used Somewhere Else
const useShowById = showId => {
  const [showData, setshowData] = useState(null);
  const [showError, setshowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setshowData(data);
      } catch (error) {
        setshowError(error);
      }
    }

    fetchData();
  }, [showId]);

  return { showData, showError };
};

const Show = () => {
  const { showId } = useParams();
  const { showError, showData } = useShowById(showId);

  if (showError) {
    return <div>We hava an Error:{showError.message}</div>;
  }

  if (showData) {
    return <div>Got Show data:{showData.name}</div>;
  }

  return <div>Data is Loading...</div>;
};

export default Show;
