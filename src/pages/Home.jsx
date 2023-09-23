import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [apiData, setapiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setapiDataError(null);

      let result;

      searchOption === 'show'
        ? (result = await searchForShows(q))
        : (result = await searchForPeople(q));

      setapiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured :{apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No Results</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </>
  );
};
export default Home;
