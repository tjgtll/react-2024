import { BASE_API_URL } from './constants';
import { errorHandler, CustomError } from './errorHandler';
import { ApiResponse, Pokemon } from './types/api.interface';

class PokeApiService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private extractPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  async getPokemonById(id: string): Promise<Pokemon | undefined> {
    const url = `${this.baseUrl}/pokemon/${id}`;

    try {
      const response: Response = await fetch(url);
      if (!response.ok) {
        throw new CustomError('Network response was not ok.');
      }

      const pokemon: Pokemon = await response.json();
      pokemon.sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return pokemon;
    } catch (error: unknown) {
      throw errorHandler(error);
    }
  }

  async getPokemonList(
    query: string = '',
    limit: number = 10,
    offset: number = 0
  ): Promise<ApiResponse | undefined> {
    const url = query
      ? `${this.baseUrl}/pokemon/${query}`
      : `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`;

    try {
      console.log(11);

      const response: Response = await fetch(url);
      if (!response.ok) {
        throw new CustomError('Network response was not ok.');
      }
      console.log(12);

      const data: ApiResponse = await response.json();
      console.log(data);
      if(query!="") {
        const id = this.extractPokemonId(data.results[0].url);
        data.results[0].sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      }else for (const pokemon of data.results) {
        const id = this.extractPokemonId(pokemon.url);
        pokemon.sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      }
      console.log(14);
      return data;
    } catch (error) {
      throw errorHandler(error);
    }
  }
}
export const service = new PokeApiService(BASE_API_URL);
