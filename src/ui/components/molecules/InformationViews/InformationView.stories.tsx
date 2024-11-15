import type { Meta, StoryObj } from '@storybook/react';
import InformationView from './InformationView';

const meta: Meta<typeof InformationView> = {
  title: 'ui/components/molecules/InformationViews/InformationView',
  component: InformationView,
};

export default meta;

type Story = StoryObj<typeof InformationView>;

export const Default: Story = {
  args: {
    items: ['columns', 'rows', 'cells'],
    onCheck: () => {},
    itemsFiltered: ['1', '2', '3'],
    onFilter: () => {},
  },
};
