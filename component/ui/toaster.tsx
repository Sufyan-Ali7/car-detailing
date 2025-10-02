'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/component/ui/toast';
import { useToast } from '@/hooks/use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}

      {/* mobile: top-center | desktop: bottom-right */}
      <ToastViewport
        className="
          fixed z-[100] flex max-h-screen w-full flex-col p-4 sm:max-w-[420px] outline-none
          data-[state=open]:animate-in data-[state=closed]:animate-out
          top-4 left-1/2 -translate-x-1/2
          sm:bottom-4 sm:right-4 sm:top-auto sm:left-auto sm:translate-x-0
        "
      />
    </ToastProvider>
  );
}
