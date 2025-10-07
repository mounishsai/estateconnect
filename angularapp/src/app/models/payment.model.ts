import { User } from './user.model';
import { Property } from './property.model';

export interface Payment {
  paymentId?: number;
  paymentStatus: string;
  user: Partial<User>;
  property: Partial<Property>;
}
