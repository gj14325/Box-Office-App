import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  // console.log(inputValue);

  const onSearchInputChange = event => {
    // console.log(ev.target.value);

    setSearchStr(event.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();

    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
