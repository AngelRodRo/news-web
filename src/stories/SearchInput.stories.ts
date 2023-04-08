import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from '../components/SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
};

export default meta;

export const Default: StoryObj<typeof SearchInput> = {
  args: {
  },
};
