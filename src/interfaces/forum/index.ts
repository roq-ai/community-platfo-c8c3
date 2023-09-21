import { DiscussionInterface } from 'interfaces/discussion';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ForumInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  discussion?: DiscussionInterface[];
  user?: UserInterface;
  _count?: {
    discussion?: number;
  };
}

export interface ForumGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
