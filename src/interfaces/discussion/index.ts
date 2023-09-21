import { UserInterface } from 'interfaces/user';
import { ForumInterface } from 'interfaces/forum';
import { GetQueryInterface } from 'interfaces';

export interface DiscussionInterface {
  id?: string;
  title: string;
  body: string;
  user_id: string;
  forum_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  forum?: ForumInterface;
  _count?: {};
}

export interface DiscussionGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  body?: string;
  user_id?: string;
  forum_id?: string;
}
