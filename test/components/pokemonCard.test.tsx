import { render, screen } from '@testing-library/react';
import { vi, expect } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';
import { PokemonCard, PokemonProps } from '../../src/components/pokemonCard';
import { MemoryRouter } from 'react-router-dom';

describe('check PokemonCard', () => {
  const mockProps: PokemonProps = {
    name: 'pikachu',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
  };

  test('renders PokemonCard with props', () => {
    render(
      <MemoryRouter>
        <PokemonCard {...mockProps} />
      </MemoryRouter>
    );
    expect(screen.getByAltText('pikachu')).toHaveAttribute(
      'src',
      mockProps.sprites
    );
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });
});
