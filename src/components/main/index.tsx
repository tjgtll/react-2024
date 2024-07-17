import { Outlet } from 'react-router-dom';
import { PokemonList } from '../pokemonList/index';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { useStoredState } from '../../hooks/useStoredState';

export const Main = () => {
  const { searchTerm, setSearchTerm } = useStoredState();

  const searchHandler = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header searchTerm={searchTerm} searchHandler={searchHandler} />
      <PokemonList searchTerm={searchTerm} />
      <Outlet />
      <Footer />
    </>
  );
};
