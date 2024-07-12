import { Component } from 'react';
import PokemonCard from '../PokemonCard';
import { service } from '../../services/pokeService';
import { ApiResponse, Pokemon } from '../../services/types/api.interface.ts';
import { CustomError } from '../../services/errorHandler';
import './style.scss';

interface MainState {
  searchResults: Pokemon[];
  error: CustomError | null;
  isLoading: boolean;
}

class Main extends Component<NonNullable<unknown>, MainState> {
  constructor(props: NonNullable<unknown>) {
    super(props);

    this.state = {
      searchResults: [],
      error: null,
      isLoading: false,
    };
  }

  componentDidMount(): void {
    const search: string = localStorage.getItem('pokemon') || '';
    this.fetchResults(search).catch((error): Promise<void> => {
      throw new CustomError(error);
    });
  }

  fetchResults = async (query: string): Promise<void> => {
    this.setState({ isLoading: true });
    try {
      const data: ApiResponse | undefined = await service.getPokemonList(query);
      if (data && data.results) {
        this.setState({ searchResults: data.results, error: null });
      } else {
        this.setState({ searchResults: [], error: null });
      }
    } catch (error: unknown) {
      this.setState({ error: error as CustomError });
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { searchResults, error, isLoading } = this.state;

    return (
      <div className="main-content">
        {isLoading ? (
            <div className="loader">Loading...</div>
          ) : error ? (
          <div className="error-message">{error.message}</div>
        ) : (
          searchResults.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </div>
    );
  }
}

export default Main;
