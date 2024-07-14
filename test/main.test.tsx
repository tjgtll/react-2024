import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {App} from '../src/app/App';
import '@testing-library/jest-dom';

describe('main file', () => {
  test('render main', () => {
    render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
    );
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Throw Error')).toBeInTheDocument();
    expect(screen.getByText('Logo')).toBeInTheDocument();
  });
});
