import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

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
    refetchOnReconnect: false,
  });

  if (showError) {
    return <div>We hava an Error:{showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons: </h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast: </h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Data is Loading...</div>;
};

export default Show;
