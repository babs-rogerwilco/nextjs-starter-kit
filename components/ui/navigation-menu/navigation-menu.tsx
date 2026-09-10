'use client';

import { NavigationMenu as Radix } from 'radix-ui';
import { type ComponentProps } from 'react';

import styles from './navigation-menu.module.scss';

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function NavigationMenu({
  className,
  children,
  ...props
}: ComponentProps<typeof Radix.Root>) {
  return (
    <Radix.Root className={cx(styles.root, className)} {...props}>
      {children}
      <div className={styles.viewportPosition}>
        <Radix.Viewport className={styles.viewport} />
      </div>
    </Radix.Root>
  );
}

export const NavigationMenuList = ({
  className,
  ...props
}: ComponentProps<typeof Radix.List>) => (
  <Radix.List className={cx(styles.list, className)} {...props} />
);

export const NavigationMenuItem = Radix.Item;

export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof Radix.Trigger>) {
  return (
    <Radix.Trigger className={cx(styles.trigger, className)} {...props}>
      {children}
      <svg
        className={styles.chevron}
        aria-hidden
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Radix.Trigger>
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: ComponentProps<typeof Radix.Content>) {
  return <Radix.Content className={cx(styles.content, className)} {...props} />;
}

export function NavigationMenuLink({
  className,
  ...props
}: ComponentProps<typeof Radix.Link>) {
  return <Radix.Link className={cx(styles.link, className)} {...props} />;
}