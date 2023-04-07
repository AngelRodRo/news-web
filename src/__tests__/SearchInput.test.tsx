import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import SearchInput from '../components/SearchInput'
import '@testing-library/jest-dom'

describe('Search Input component', () => {
  afterEach(cleanup)

  it('should render Search Input component', () => {
    render(<SearchInput />)
    expect(screen.getByTestId('search-input')).toBeInTheDocument()
  })

  it('should display a search input', () => {
    render(<SearchInput />)
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
})
