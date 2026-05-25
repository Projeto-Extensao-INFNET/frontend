import * as React from 'react';
import { Popover as PopoverPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

/**
 * Wraps the Radix UI Popover root and attaches a `data-slot="popover"` attribute.
 *
 * @param props - Props forwarded to `PopoverPrimitive.Root`
 * @returns The Popover root element with forwarded props and `data-slot="popover"`
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

/**
 * Renders a popover trigger element annotated with data-slot="popover-trigger".
 *
 * @returns The rendered trigger element with all received props applied.
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

/**
 * Renders the popover content inside a portal with default styling and animations.
 *
 * @param className - Additional CSS class names to apply to the content element
 * @param align - Alignment of the popover relative to its trigger (defaults to `'center'`)
 * @param sideOffset - Distance in pixels between the trigger and the content (defaults to `4`)
 * @returns The rendered popover content element
 */
function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1 outline-hidden duration-100',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

/**
 * Renders a Radix UI Popover Anchor element with the popover-anchor slot attribute.
 *
 * @returns The Popover Anchor element with `data-slot="popover-anchor"` and all provided props applied
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

/**
 * Renders a popover header container with default header styling.
 *
 * @param className - Additional CSS class names to merge with the default header classes (`flex`, `flex-col`, `gap-0.5`, `text-sm`).
 * @param props - Other standard `div` element props which are forwarded to the rendered container.
 * @returns A `div` element configured as the popover header (`data-slot="popover-header"`).
 */
function PopoverHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="popover-header"
      className={cn('flex flex-col gap-0.5 text-sm', className)}
      {...props}
    />
  );
}

/**
 * Renders the popover title element.
 *
 * @param className - Additional CSS classes to apply to the title element
 * @returns A div element with `data-slot="popover-title"` that applies `font-medium` and merges any provided classes
 */
function PopoverTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <div
      data-slot="popover-title"
      className={cn('font-medium', className)}
      {...props}
    />
  );
}

/**
 * Renders the popover description element.
 *
 * Applies a default muted-foreground text style and merges any provided `className`.
 *
 * @param className - Additional CSS class names to apply to the description element
 * @returns The rendered `<p>` element used as the popover's description
 */
function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="popover-description"
      className={cn('text-muted-foreground', className)}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};
