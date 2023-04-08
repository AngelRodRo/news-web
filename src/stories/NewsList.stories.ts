import type { Meta, StoryObj } from '@storybook/react';
import NewsList from '../components/NewsList';

const meta: Meta<typeof NewsList> = {
  title: 'NewsList',
  component: NewsList,
};

export default meta;

const descriptionWithMoreThan20Words = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';


export const Default: StoryObj<typeof NewsList> = {
  args: {
    news: [
      {
        id: '1',
        title: 'Card title',
        body: descriptionWithMoreThan20Words,
        url: 'https://www.google.com',
        imageUrl: 'https://picsum.photos/200/300',
        imageThumbnail: 'https://picsum.photos/200/300',
      },
      {
        id: '2',
        title: 'Card title',
        body: descriptionWithMoreThan20Words,
        url: 'https://www.google.com',
        imageUrl: 'https://picsum.photos/200/300',
        imageThumbnail: 'https://picsum.photos/200/300',
      },
      {
        id: '3',
        title: 'Card title',
        body: descriptionWithMoreThan20Words,
        url: 'https://www.google.com',
        imageUrl: 'https://picsum.photos/200/300',
        imageThumbnail: 'https://picsum.photos/200/300',
      },
      {
        id: '4',
        title: 'Card title',
        body: descriptionWithMoreThan20Words,
        url: 'https://www.google.com',
        imageUrl: 'https://picsum.photos/200/300',
        imageThumbnail: 'https://picsum.photos/200/300',
      },
      {
        id: '5',
        title: 'Card title',
        body: descriptionWithMoreThan20Words,
        url: 'https://www.google.com',
        imageUrl: 'https://picsum.photos/200/300',
        imageThumbnail: 'https://picsum.photos/200/300',
      },
      {
        id: '6',
        title: 'Card title',
        body: descriptionWithMoreThan20Words,
        url: 'https://www.google.com',
        imageUrl: 'https://picsum.photos/200/300',
        imageThumbnail: 'https://picsum.photos/200/300',
      }
    ]
  },
};
