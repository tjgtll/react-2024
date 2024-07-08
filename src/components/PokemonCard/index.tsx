import React from 'react';
import { Pokemon } from '../../services/types/api.interface';
import './style.scss';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites} alt={pokemon.name} />
    </div>
  );
};

export default PokemonCard;
