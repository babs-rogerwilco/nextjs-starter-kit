'use client';

import { Dialog as Radix } from 'radix-ui';
import { type ComponentProps } from 'react';

import styles from './dialog.module.scss';

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const Dialog = Radix.Root;
export const DialogTrigger = Radix.Trigger;
export const DialogClose = Radix.Close;

export function DialogContent({
  className,
  children,
  ...props
}: ComponentProps<typeof Radix.Content>) {
  return (
    <Radix.Portal>
      <Radix.Overlay className={styles.overlay} />
      <Radix.Content className={cx(styles.content, className)} {...props}>
        {children}
        <Radix.Close className={styles.closeButton} aria-label="Close dialog">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Radix.Close>
      </Radix.Content>
    </Radix.Portal>
  );
}

export function DialogTitle({
  className,
  ...props
}: ComponentProps<typeof Radix.Title>) {
  return <Radix.Title className={cx(styles.title, className)} {...props} />;
}

export const DialogDescription = Radix.Description;