import { Meta, StoryObj } from '@storybook/react';
import { App } from '../App';

type Story = StoryObj<typeof App>;

export default {
  component: App,
  title: 'example/App',
  tags: ['example'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof App>;

export const Default: Story = {};
