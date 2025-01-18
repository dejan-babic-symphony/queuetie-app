import { Meta, StoryObj } from '@storybook/react';
import { Gadget, GadgetProps } from '../components/Gadget';

type Story = StoryObj<typeof Gadget>;

export default {
  component: Gadget,
  title: 'composite/Gadget',
  tags: ['gadget'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Gadget>;

const defaultProps: GadgetProps = {};
const configuredProps: GadgetProps = {};

export const Default: Story = { args: defaultProps };
export const Configured: Story = { args: configuredProps };
