import { Component } from 'react';
import PokemonCard from '../PokemonCard';
import { service } from '../../services/pokeService';
import { ApiResponse, Pokemon } from '../../services/types/api.interface.ts';
import { CustomError } from '../../services/errorHandler';
import './style.scss';

interface MainState {
  searchResults: Pokemon[];
  error: CustomError | null;
}

class Main extends Component<NonNullable<unknown>, MainState> {
  constructor(props: NonNullable<unknown>) {
    super(props);

    this.state = {
      searchResults: [],
      error: null,
    };
  }

  componentDidMount(): void {
    const search: string = localStorage.getItem('pokemon') || '';
    this.fetchResults(search).catch((error): Promise<void> => {
      throw new CustomError(error);
    });
  }

  fetchResults = async (query: string): Promise<void> => {
    try {
      console.log(1);
      const data: ApiResponse | undefined = await service.getPokemonList(query);
      console.log(2);
      console.log(data);
      if (data && data.results) {
        this.setState({ searchResults: data.results, error: null });
      } else {
        this.setState({ searchResults: [], error: null });
      }
      console.log(3);
    } catch (error: unknown) {
      console.log(4);
      this.setState({ error: error as CustomError });
    }
  };

  render() {
    const { searchResults, error } = this.state;

    return (
      <div className="main-content">
        {error ? (
          <div className="error-message">
            {error.message}
          </div>
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
