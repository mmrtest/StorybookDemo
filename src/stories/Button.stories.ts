import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import Layout from './Layout.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
  args: {
    backgroundColor: '#000000',
    textColor: '#ffffff',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments'
      },
    },
  },
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Button',
    backgroundColor: "#3698ff"
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    backgroundColor: "#2bff00"
  },
};

export const Large: Story = {
  args: {
    label: 'BIG Button',
    size: 'large',
    backgroundColor: "#2bff00"
  },
};

export const Small: Story = {
  args: {
    label: 'Smol Button',
    size: 'small',
    backgroundColor: "#2bff00"
  },
};

