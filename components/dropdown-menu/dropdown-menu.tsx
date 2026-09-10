'use client';

import { DropdownMenu as Radix } from 'radix-ui';
import { type ComponentProps } from 'react';

import styles from './dropdown-menu.module.scss';

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const DropdownMenu = Radix.Root;

export function DropdownMenuTrigger({
  className,
  ...props
}: ComponentProps<typeof Radix.Trigger>) {
  return <Radix.Trigger className={cx(styles.trigger, className)} {...props} />;
}

export function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof Radix.Content>) {
  return (
    <Radix.Portal>
      <Radix.Content
        className={cx(styles.content, className)}
        sideOffset={sideOffset}
        {...props}
      />
    </Radix.Portal>
  );
}

export function DropdownMenuItem({
  className,
  ...props
}: ComponentProps<typeof Radix.Item>) {
  return <Radix.Item className={cx(styles.item, className)} {...props} />;
}

export function DropdownMenuLabel({
  className,
  ...props
}: ComponentProps<typeof Radix.Label>) {
  return <Radix.Label className={cx(styles.label, className)} {...props} />;
}

export function DropdownMenuSeparator({
  className,
  ...props
}: ComponentProps<typeof Radix.Separator>) {
  return <Radix.Separator className={cx(styles.separator, className)} {...props} />;
}