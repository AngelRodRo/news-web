import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'

describe('App component', () => {
  afterEach(cleanup);

  it('should render App component', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('should display "News search" title', () => {
    render(<App />);
    expect(screen.getByText('News search')).toBeInTheDocument();
  });

  it('should display a search input', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should display a search button', () => {
    render(<App />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('the search button should be disabled when the input is empty', async () => {
    render(<App />);
    expect(screen.getByTestId('search-button')).toBeDisabled();
  });
  
}); 