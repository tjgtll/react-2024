import { Link, useLoaderData } from 'react-router-dom';
import './style.scss';

export interface PokemonDetailedCard {
  id: string;
  name: string;
  sprites: string;
  weight: string;
}

export const PokemonDetailedCard = () => {
  const data = useLoaderData() as { pokemonDetailedCard?: PokemonDetailedCard };
  const pokemonDetailedCard = data?.pokemonDetailedCard;

  if (!pokemonDetailedCard) {
    return (
      <div className="pokemon-description">
        <Link className="pokemon-description__back-button" to="/">
          back
        </Link>
        <h3>Pokemon not found</h3>
      </div>
    );
  }
        
  const { id,name, sprites , weight,} = pokemonDetailedCard;
  return (
    <div className="pokemon-description">
      <Link className="pokemon-description__back-button" to="/">
        back
      </Link>
      <h3 className='pokemon-label'>{name}</h3>
      <div>
        <p>Pokemon description:</p>
        <h3>{name}</h3>
        <img src={sprites} alt={name} className='pokemon-name'/>
        <h3>number in pokedex: {id}</h3>
        <h3>weight: {weight}</h3>
      </div>
    </div>
  );
};
