import type { Meta, StoryObj } from '@storybook/react';
import SearchButton from '../components/SearchButton';

const meta: Meta<typeof SearchButton> = {
  title: 'SearchButton',
  component: SearchButton,
};

export default meta;

export const Default: StoryObj<typeof SearchButton> = {
  args: {
  },
};
