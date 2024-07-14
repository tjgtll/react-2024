import { Link, useLoaderData } from 'react-router-dom';
import './style.scss';

export interface PokemonDetailedCard {
  id: string;
  name: string;
  sprites: string;
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
  const { name, sprites } = pokemonDetailedCard;
  return (
    <div className="pokemon-description">
      <Link className="pokemon-description__back-button" to="/">
        back
      </Link>
      <h3>{name}</h3>
      <div>
        <p>Pokemon description:</p>
        <h3>{name}</h3>
        <img src={sprites} alt={name} />
      </div>
    </div>
  );
};
