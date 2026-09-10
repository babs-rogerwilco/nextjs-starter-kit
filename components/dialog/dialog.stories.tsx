import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from '../button/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const meta = {
  title: 'Shared/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompareVehicles: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Compare vehicles</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Compare D-Max vs MU-X</DialogTitle>
        <DialogDescription>
          Side-by-side specs for the vehicles you&apos;ve selected.
        </DialogDescription>
        <p>Comparison table goes here.</p>
        <DialogClose asChild>
          <Button variant="secondary">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  ),
};