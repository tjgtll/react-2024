import { useEffect, useState } from 'react';
import { PokemonProps } from '../components/pokemonCard/index';
import { BASE_API_URL } from '../services/constants';

export const usePokeApi = (
  searchTerm: string,
  limit: number = 16,
  offset: number = 0
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);

  const getPokemonList = async (searchTerm: string) => {
    searchTerm = searchTerm.toLowerCase();
    const url = searchTerm
      ? `${BASE_API_URL}/pokemon/${searchTerm}`
      : `${BASE_API_URL}/pokemon?limit=${limit}&offset=${offset}`;
    setIsLoading(true);

    if (searchTerm !== '') {
      fetch(url).then((response) => {
        response.json().then((data) => {
          data.sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
          data.url = `${BASE_API_URL}/pokemon/${data.id}/`;

          setPokemonList([data]);
        });
      });
    } else {
      fetch(url).then((response) => {
        response.json().then((data) => {
          for (const pokemon of data.results) {
            const id = extractPokemonId(pokemon.url);
            pokemon.sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          }
          setPokemonList(data.results);
        });
      });
    }
    setIsLoading(false);
  };

  const extractPokemonId = (url: string): string => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  useEffect(() => {
    getPokemonList(searchTerm);
  }, [searchTerm, limit, offset]);

  return { isLoading, pokemonList };
};
