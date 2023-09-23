import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

//Custom Hooks => Can be used Somewhere Else
// import { useEffect, useState } from 'react';
// const useShowById = showId => {
//   const [showData, setshowData] = useState(null);
//   const [showError, setshowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowById(showId);
//         setshowData(data);
//       } catch (error) {
//         setshowError(error);
//       }
//     }

//     fetchData();
//   }, [showId]);

//   return { showData, showError };
// };

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We hava an Error:{showError.message}</div>;
  }

  if (showData) {
    return <div>Got Show data:{showData.name}</div>;
  }

  return <div>Data is Loading...</div>;
};

export default Show;
