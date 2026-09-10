import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';

function renderMenu() {
  return render(
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bakkies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/bakkies">Range</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/trucks">Trucks</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>,
  );
}

describe('NavigationMenu', () => {
  it('renders top-level triggers and links', () => {
    renderMenu();
    expect(screen.getByRole('button', { name: 'Bakkies' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Trucks' })).toBeInTheDocument();
  });

  it('reveals dropdown content when its trigger is clicked', async () => {
    const user = userEvent.setup();
    renderMenu();

    expect(screen.queryByRole('link', { name: 'Range' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Bakkies' }));

    expect(await screen.findByRole('link', { name: 'Range' })).toBeInTheDocument();
  });
});