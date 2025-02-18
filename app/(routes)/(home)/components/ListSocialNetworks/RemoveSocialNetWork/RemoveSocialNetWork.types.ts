import { Link } from '@prisma/client';

export type RemoveSocialNetWorkProps = {
  linkId: Link['id'];
  onReload: React.Dispatch<React.SetStateAction<boolean>>;
};
