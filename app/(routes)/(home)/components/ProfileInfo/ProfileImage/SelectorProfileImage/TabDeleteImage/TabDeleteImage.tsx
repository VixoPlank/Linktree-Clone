import { ChevronLeft } from 'lucide-react';
import { TabDeleteImageProps } from './TabDeleteImage.types';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { userUserInfo } from '@/hooks/useUser';

export function TabDeleteImage(props: TabDeleteImageProps) {
  const { setShowDialog, setShowTab } = props;

  const { reloadUser } = userUserInfo();

  const onRemoveImage = async () => {
    await axios.patch('/api/update-user', {
      avatarUrl:
        'https://n00j3tqfs5.ufs.sh/f/zxigctRoB7NfxsGbZtT35XyPUr2WBGLfT0whs8SY1nxbAvZC',
    });
    setShowDialog(false);
    toast({ title: 'Profile image deleted' });
    reloadUser();
  };

  return (
    <div>
      <div
        className='flex gap-1 items-center text-sm cursor-pointer hover:bg-stone-100 p-1 w-fit rounded-lg'
        onClick={() => setShowTab(null)}
      >
        <ChevronLeft className='size-4' />
        Back
      </div>
      <div className='flex flex-col gap-2 mt-3'>
        <Button
          className='bg-violet-600 text-white rounded-full'
          onClick={onRemoveImage}
        >
          Yes, remove
        </Button>

        <Button
          variant='outline'
          className='rounded-full'
          onClick={() => setShowTab(null)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
