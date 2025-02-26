import Image from 'next/image';
import { UserProfileProps } from './UserProfile.types';
import Link from 'next/link';
import { TreePalm } from 'lucide-react';
import { MoreInfoProfile } from './MoreInfoProfile';

export function UserProfile(props: UserProfileProps) {
  const { user } = props;

  return (
    <div className='flex flex-col items-center justify-between gap-2 h-screen max-w-2xl mx-auto'>
      {user?.backgroundImage ? (
        <Image
          src={user.backgroundImage}
          alt='background'
          layout='fill'
          objectFit='cover'
          className='absolute top-0 left-0 w-full h-full'
        />
      ) : (
        <div className='absolute top-0 left-0 w-full h-full bg-[#e4e9ed]' />
      )}
      <div className='flex flex-col items-center gap-2 pt-32 w-full px-5 z-10'>
        <MoreInfoProfile user={user} />
        <div>
          <Image
            src={user.avatarUrl || '/avatar-user.png'}
            alt='User profile'
            width={96}
            height={96}
            className='rounded-full aspect-square object-contain'
          />
        </div>
        <div>
          <p className='font-semibold text-2xl text-blue-700'>
            @{user.username}
          </p>
          {user?.bio && (
            <div className='my-2'>
              <p className='text-center'>{user.bio}</p>
            </div>
          )}
        </div>
        <div className='flex gap-5 mt-10'>
          {user.links.map((link) => (
            <Link href={link.link || ''} key={link.id} target='_blank'>
              <Image
                src={link.icon || ''}
                alt='icon'
                width={60}
                height={60}
                className='hover:scale-110 transition-all duration-200'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='pb-5 z-10'>
        <div className='flex gap-2 items-center justify-center py-2 px-5 bg-white rounded-full '>
          <TreePalm className='size-5' />
          Linktree clone
        </div>
      </div>
    </div>
  );
}
