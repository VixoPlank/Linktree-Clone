import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RemoveSocialNetWorkProps } from './RemoveSocialNetWork.types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import axios from 'axios';
import { userUserInfo } from '@/hooks/useUser';

export function RemoveSocialNetWork(props: RemoveSocialNetWorkProps) {
  const { linkId, onReload } = props;
  const [showDialog, setShowDialog] = useState(false);

  const { reloadUser } = userUserInfo();

  const onDelete = async () => {
    await axios.delete(`/api/social-network/${linkId}`);
    onReload(true);
    setShowDialog(false);
    reloadUser();
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant='destructive'>
          <Trash className='size-4' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete social network</DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
          <p className='text-sm text-slate-500'>
            Are you sure you want to delete this social network? This action
            cannot be undone.
          </p>
          <div className='flex flex-col gap-4'>
            <Button
              variant='destructive'
              className='w-full rounded-full'
              onClick={onDelete}
            >
              Delete
            </Button>
            <Button
              variant='outline'
              className='w-full rounded-full'
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
