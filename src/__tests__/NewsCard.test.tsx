import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsCard from '../components/Card';
import '@testing-library/jest-dom'

const mockData = {
  title: 'test',
  description: 'Lorem Ipsum',
  thumbnail: 'https://picsum.photos/200/300',
  url: 'https://www.google.com'
}

describe('News Card component', () => {
  afterEach(cleanup);

  it('should render News Card component', async () => {
    render(
      <NewsCard 
        title={mockData.title}
        description={mockData.description}
        thumbnail={mockData.thumbnail} 
        url={mockData.url}
      />
    );

    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('should display a title text, description and thumbnail', () => {
    render(
      <NewsCard 
        title={mockData.title}
        description={mockData.description}
        thumbnail={mockData.thumbnail} 
        url={mockData.url}
      />
    );

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(screen.getByAltText('News Image')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.google.com');
  });

  it('should display a read more button', () => {
    render(
      <NewsCard 
        title={mockData.title}
        description={mockData.description}
        thumbnail={mockData.thumbnail} 
        url={mockData.url}
      />
    );

    expect(screen.getByText('Read more ...')).toBeInTheDocument();
  });

  test('the thumbnail should call a function when it is clicked', async () => {
    const handleThumbnailClick = jest.fn();

    const { getByRole } = render(
      <NewsCard 
        title={mockData.title}
        description={mockData.description}
        thumbnail={mockData.thumbnail} 
        url={mockData.url}
        onThumbnailClick={handleThumbnailClick}
      />
    );

    await userEvent.click(getByRole('img'));

    expect(handleThumbnailClick).toHaveBeenCalled();
  });

  it('should open the news URL in a new window when the “Read more” link is clicked', () => { 
    render(
      <NewsCard 
        title={mockData.title}
        description={mockData.description}
        thumbnail={mockData.thumbnail} 
        url={mockData.url}
      />
    )
    expect(screen.getByText('Read more ...')).toHaveAttribute('target', '_blank');
  });

  it('should display a ellipsis punctuation mark when the description has 20 words or more', async () => {
    const descriptionWithMoreThan20Words = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

    render(
      <NewsCard 
        title={mockData.title}
        description={descriptionWithMoreThan20Words}
        thumbnail={mockData.thumbnail} 
        url={mockData.url}
      />
    );

    const el = screen.getByTestId('card-description');

    expect(el.textContent).toContain('...');
  });

});