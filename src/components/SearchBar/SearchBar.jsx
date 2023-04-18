import SearchIcon from '../icons/SearchIcon';
import { useRouter } from 'next/router';
import { useState } from 'react';

function SearchBar({ placeholder }) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  function handleSearch(e) {
    if (e.key === 'Enter') {
      if (e.target.value === '') {
        return;
      } else {
        router.push(`/search/${query.trim()}`);
        setQuery('');
      }
    }
  }

  return (
    <div className="flex gap-4 p-4 md:p-6">
      <div>
        <SearchIcon />
      </div>
      <input
        className="w-full bg-dark-blue caret-primary-red focus:outline-none md:text-heading-m"
        type="text"
        placeholder={'Search for movies or TV series'}
        onChange={e => {
          setQuery(e.target.value);
        }}
        onKeyDown={handleSearch}
        value={query}
      ></input>
    </div>
  );
}

export default SearchBar;
