import { Link, useLocation } from 'react-router-dom';
import './style.scss';

export interface PokemonProps {
  name: string;
  sprites: string;
  url: string;
}

export const PokemonCard = (props: PokemonProps) => {
  const { pathname } = useLocation();
  const { name, url, sprites } = props;
  console.log(name, url, sprites);
  const pokemonId = url.split('/').reverse()[1];

  return (
    // <div className="pokemon-card">
    //   <h3>{name}</h3>
    //   <div>
    //     {/* <ul>
    //       <li>url: {this.pokemon.url}</li>
    //     </ul> */}
    //     <img src={sprites} alt={name} />
    //   </div>
    // </div>
    <div className="pokemon-card">
      <Link
        to={
          `/pokemon/${pokemonId}` === pathname ? '/' : `/pokemon/${pokemonId}`
        }
        className="pokemon"
      >
        <h3>{name}</h3>
        <img src={sprites} alt={name} />
      </Link>
    </div>
  );
};
