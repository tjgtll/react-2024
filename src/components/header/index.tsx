import { useState } from 'react';
import './style.scss';

interface HeaderProps {
  searchTerm: string;
  searchHandler: (value: string) => void;
}

export const Header = (props: HeaderProps) => {
  const { searchTerm, searchHandler } = props;
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchHandler(inputValue.trim());
  };

  const throwError = () => {
    throw new Error('Artificial Error thrown by button click');
  };

  return (
    <header className="header">
      <form className="search-form" onSubmit={handleSearch}>
        <div className="header-container">
          <div className="header-logo">Logo</div>
          <div className="header-search-container">
            <button className="header-search-button" onClick={throwError}>
              Throw Error
            </button>
            <input
              type="text"
              className="header-search-input"
              placeholder="Search..."
              value={inputValue}
              onChange={handleChange}
            />
            <button className="header-search-button" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
