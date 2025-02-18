import Image from 'next/image';
import { ListSocialNetworksProps } from './ListSocialNetworks.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { EditSocialNetwork } from './EditSocialNetwork';
import { RemoveSocialNetWork } from './RemoveSocialNetWork';

export function ListSocialNetworks(props: ListSocialNetworksProps) {
  const { links, onReload } = props;
  return (
    <div className='grid gap-6 mt-6 max-w-2xl mx-auto'>
      {links.map((link) => (
        <div
          key={link.id}
          className='bg-white rounded-full py-4 px-8 flex gap-4 items-center justify-between'
        >
          <div className='flex gap-2 items-center'>
            <Image
              src={link.icon || ''}
              alt='Icon'
              width={50}
              height={50}
              className='size-10'
            />
            <div className='flex flex-col'>
              <span className='text-sm'>{link.name}</span>
              <span className='text-xs text-slate-500'>{link.link}</span>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <Button asChild>
              <Link href={`${link.link}`} target='_blank'>
                <ExternalLink className='size-4' />
              </Link>
            </Button>
            <EditSocialNetwork link={link} onReload={onReload} />
            <RemoveSocialNetWork linkId={link.id} onReload={onReload} />
          </div>
        </div>
      ))}
    </div>
  );
}
