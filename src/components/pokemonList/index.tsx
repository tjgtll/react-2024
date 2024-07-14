import { PokemonCard } from '../pokemonCard/index';
import { usePokeApi } from '../../hooks/usePokeApi';
import './style.scss';

interface PokemonListProps {
  searchTerm: string;
}

export const PokemonList = (props: PokemonListProps) => {
  const { searchTerm } = props;
  const { isLoading, pokemonList } = usePokeApi(searchTerm);
  return (
    <>
      {isLoading && <div className="pokemon-list__loader">Loading...</div>}
      {!isLoading && pokemonList.length > 0 && (
        <div className="pokemon-list">
          {pokemonList.map((pokemon, index) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              url={pokemon.url}
              sprites={pokemon.sprites}
            />
          ))}
        </div>
      )}
      {!isLoading && pokemonList.length === 0 && (
        <div className="pokemon-list__loader">No results found</div>
      )}
    </>
  );
};
