import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getShowById } from '../api/tvmaze';
import Cast from '../components/shows/Cast';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import ShowMainData from '../components/shows/ShowMainData';
import { TextCenter } from '../components/common/TextCenter';

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
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link type="button" to="/">
            Go Back to Home
          </Link>
        </BackHomeWrapper>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons: </h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast: </h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
        <TextCenter style={{ paddingTop: '20px' }}>
          Created By @{' '}
          <a href="https://github.com/AiyushKumar07">Aiyush Kumar</a>
        </TextCenter>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Data is Loading...</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  margin-bottom: 40px;
  padding: 10px 100px;
  border-radius: 20px;
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.5);
  background-color: transparent;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
