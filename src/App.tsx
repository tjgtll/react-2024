import { Component, createRef, RefObject } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

interface AppState {
  searchQuery: string;
}

class App extends Component<object, AppState> {
  private mainRef: RefObject<Main>;

  constructor(props: object) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.mainRef = createRef<Main>();
  }

  handleSearch = (search: string): void => {
    if (this.mainRef.current) {
      this.mainRef.current.fetchResults(search);
    }
  };

  render() {
    return (
      <>
        <Header onSearch={this.handleSearch} />
        <Main ref={this.mainRef} />
        <Footer />
      </>
    );
  }
}

export default App;
