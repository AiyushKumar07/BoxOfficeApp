import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setsearchOption] = useState('show');

  const onRadioChange = ev => {
    setsearchOption(ev.target.value);
  };

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};

export default SearchForm;
