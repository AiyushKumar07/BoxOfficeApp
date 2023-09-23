import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const [apiData, setapiData] = useState(null);

  const [apiDataError, setapiDataError] = useState(null);

  const [searchOption, setsearchOption] = useState('show');

  const onRadioChange = ev => {
    setsearchOption(ev.target.value);
  };

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setapiDataError(null);
      if (searchOption === 'show') {
        const result = await searchForShows(searchStr);
        setapiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        setapiData(result);
      }
    } catch (error) {
      setapiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured :{apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="show"
            checked={searchOption === 'show'}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </>
  );
};
export default Home;
