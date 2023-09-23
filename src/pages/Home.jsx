import { useState } from 'react';
import { searchForShows } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const [apiData, setapiData] = useState(null);

  const [apiDataError, setapiDataError] = useState(null);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setapiDataError(null);
      const result = await searchForShows(searchStr);
      setapiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured :{apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </>
  );
};
export default Home;
