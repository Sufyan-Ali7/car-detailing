'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/component/ui/dialog';
import { Button } from '@/component/ui/button';
import type { Service } from '@/types';

export function CartItemRow({ service }: { service: Service }) {
  const { removeFromCart } = useCart();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleConfirmRemove = () => {
    const removed = removeFromCart(service.id);
    if (removed) {
      toast({
        title: 'Removed from Quote',
        description: `${service.name} has been removed.`,
        variant: 'destructive',
        duration: 3000,
      });
    }
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-gray-800">
        <div>
          <div className="text-white font-medium">{service.name}</div>
          <div className="text-sm text-gray-400">${service.price}</div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)} className="p-2 rounded-md hover:bg-red-800/20">
            <Trash2 className="h-5 w-5 text-red-400" />
          </button>
        </div>
      </div>

      {/* Confirm delete dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black text-white rounded-xl p-6 max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Remove service?</DialogTitle>
          </DialogHeader>

          <p className="text-gray-300 mt-2">
            Are you sure you want to remove <strong>{service.name}</strong> from your booking request?
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleConfirmRemove}>Remove</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
