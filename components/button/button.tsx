import { Slot } from 'radix-ui';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * Render the child element instead of a <button>, forwarding all
   * button behavior/styles onto it (e.g. to make a Next.js <Link> look
   * like a button).
   */
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, variant = 'primary', size = 'md', className, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : 'button';

    return (
      <Comp
        ref={ref}
        className={[styles.button, styles[variant], styles[size], className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';