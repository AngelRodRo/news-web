import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import SearchButton from '../components/SearchButton';
import '@testing-library/jest-dom'

describe('Search Button component', () => {
  afterEach(cleanup);

  it('should render Search Button component', () => {
    render(<SearchButton />);
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
  });

  it('should display a search button', () => {
    render(<SearchButton />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('should call onClick function when clicked', () => { 
    const onClick = jest.fn();
    render(<SearchButton onClick={onClick} />);
    screen.getByTestId('search-button').click();
    expect(onClick).toHaveBeenCalled();
  });
});