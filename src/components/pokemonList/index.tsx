import { useState } from 'react';
import { PokemonCard } from '../pokemonCard/index';
import { usePokeApi } from '../../hooks/usePokeApi';
import './style.scss';

interface PokemonListProps {
  searchTerm: string;
}

export const PokemonList = (props: PokemonListProps) => {
  const { searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, pokemonList } = usePokeApi(searchTerm, 16, currentPage * 16);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  return (
    <>
      {isLoading && <div className="pokemon-list__loader">Loading...</div>}
      {!isLoading && pokemonList.length > 0 && (
        <>
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
          <div className="pokemon-pagination-controls">
            <button onClick={handlePreviousPage} disabled={currentPage === 0}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </>
      )}
      {!isLoading && pokemonList.length === 0 && (
        <div className="pokemon-list__loader">No results found</div>
      )}
    </>
  );
};
