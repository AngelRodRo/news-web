import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import News from '../components/NewsHomePage';
import '@testing-library/jest-dom'
import { 
  QueryClientProvider,
  QueryClient
 } from '@tanstack/react-query'

jest.mock('../constants', () => ({
  NEWS_SEARCH_URL: '',
}));

describe('App component', () => {
  afterEach(cleanup);

  it('should render App component', () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <News />
      </QueryClientProvider>
    );
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('should display "News search" title', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <News />
      </QueryClientProvider>
    );
    expect(screen.getByText('News search')).toBeInTheDocument();
  });

  it('should display a search input', () => {
    const queryClient = new QueryClient();
    render(<QueryClientProvider client={queryClient}>
      <News />
    </QueryClientProvider>);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should display a search button', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <News />
      </QueryClientProvider>
    );
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('the search button should be disabled when the input is empty', async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <News />
      </QueryClientProvider>
    );
    expect(screen.getByTestId('search-button')).toBeDisabled();
  });
  
}); 