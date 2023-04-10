import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import NewsList from '../components/NewsList';
import '@testing-library/jest-dom'

import type { News } from '@/types.ds';


const mockData: News[] = [
  {
    id: "randomId",
    title: 'test',
    body: 'Lorem Ipsum',
    imageThumbnail: 'https://picsum.photos/200/300',
    imageUrl: 'https://picsum.photos/200/300',
    url: 'https://www.google.com'
  },
  {
    id: "randomId2",
    title: 'test2',
    body: 'Lorem Ipsum',
    imageThumbnail: 'https://picsum.photos/200/300',
    imageUrl: 'https://picsum.photos/200/300',
    url: 'https://www.google.com'
  }
];

describe('News List component', () => {
  afterEach(cleanup);

  it('should render News List component', async () => {
    render(
      <NewsList news={mockData} />
    );

    expect(screen.getByTestId('news-list')).toBeInTheDocument();
  });

  it('should display a list of news', () => {
    render(
      <NewsList news={mockData} />
    );

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
  });
});