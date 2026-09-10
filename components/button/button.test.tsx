import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  it('renders its children', () => {
    render(<Button>Request a quote</Button>);
    expect(
      screen.getByRole('button', { name: 'Request a quote' }),
    ).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Find a dealer</Button>);

    await user.click(screen.getByRole('button', { name: 'Find a dealer' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Sold out
      </Button>,
    );

    await user.click(screen.getByRole('button', { name: 'Sold out' }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders as the child element when asChild is set', () => {
    render(
      <Button asChild>
        <a href="/vehicles/d-max">View D-Max</a>
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'View D-Max' });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
  });
});