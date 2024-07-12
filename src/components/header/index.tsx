import { Component } from 'react';
import './style.scss';

interface HeaderProps {
  onSearch: (query: string) => void;
}

interface HeaderState {
  query: string;
  hasError: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      query: '',
      hasError: false,
    };
  }

  componentDidMount() {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      this.setState({ query: savedQuery }, () => {
        this.handleSearch();
      });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    const { query } = this.state;
    localStorage.setItem('searchQuery', query);
    this.props.onSearch(query);
  };

  throwError = (): void => {
    this.setState({ hasError: true });
  };

  render() {
    return (
      <header className="header">
        <div className="header-container">
          <div className="header-logo">Logo</div>

          <div className="header-search-container">
            <button className="header-search-button" onClick={this.throwError}>
              Throw Error
            </button>
            <input
              type="text"
              className="header-search-input"
              placeholder="Search..."
              value={this.state.query}
              onChange={this.handleChange}
            />
            <button
              className="header-search-button"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
