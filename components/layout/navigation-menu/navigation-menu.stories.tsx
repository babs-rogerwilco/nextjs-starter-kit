import type { Meta, StoryObj } from '@storybook/nextjs';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';

import styles from './navigation-menu.stories.module.scss';

const meta = {
  title: 'Layout/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderExample: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bakkies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={styles.linkList}>
              <li>
                <NavigationMenuLink href="/bakkies">Range</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/bakkies/fleet">Fleet vehicles</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/compare">Compare vehicles</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>SUVs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={styles.linkList}>
              <li>
                <NavigationMenuLink href="/suvs">Range</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/compare">Compare vehicles</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/trucks">Trucks</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/offers">Offers</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};