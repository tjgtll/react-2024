import {
  createBrowserRouter,
  createRoutesFromElements,
  LoaderFunction,
  Route,
  RouterProvider,
} from 'react-router-dom';
import notFound from '../assets/not-found.gif';
import { Main } from '../components/main';
import { PokemonDetailedCard } from '../components/pokemonDetailedCard';
import { BASE_API_URL } from '../services/constants';
import './App.css';
import ErrorBoundary from '../components/errorBoundary';
import { NotFound } from '../components/notFound';

const getPokemonDetailedCard = async (id: string | undefined) => {
  if (!id) return;
  const apiUrl = `${BASE_API_URL}/pokemon/${id}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  data.sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
  return data;
};

const loaderPokemonDetailedCard: LoaderFunction<{
  pokemonDetailedCard: PokemonDetailedCard;
}> = async ({ params }) => {
  const pokemonDescription = await getPokemonDetailedCard(params.id);
  return { pokemonDetailedCard: pokemonDescription };
};

export const App = () => {
  const routers = createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} errorElement={<p>Somthing wrong</p>}>
        <Route
          path="pokemon/:id"
          loader={loaderPokemonDetailedCard}
          element={<PokemonDetailedCard />}
        />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </>
  );
  const router = createBrowserRouter(routers, {});
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
