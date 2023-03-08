import SearchIcon from '../icons/SearchIcon';

function SearchBar({ placeholder }) {
  return (
    <div className="flex gap-4 p-4">
      <SearchIcon />
      <input
        className="w-full bg-dark-blue caret-primary-red focus:outline-none"
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default SearchBar;
