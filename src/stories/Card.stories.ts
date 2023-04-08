import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;

const descriptionWithMoreThan20Words = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';


export const Default: StoryObj<typeof Card> = {
  args: {
    title: 'Card title',
    body: descriptionWithMoreThan20Words,
    url: 'https://www.google.com',
    imageUrl: 'https://picsum.photos/200/300',
    imageThumbnail: 'https://picsum.photos/200/300',
  },
};
