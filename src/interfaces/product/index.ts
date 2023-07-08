import { ReviewInterface } from 'interfaces/review';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];

  _count?: {
    review?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
