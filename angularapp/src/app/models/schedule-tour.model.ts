import { Property } from './property.model';

export interface ScheduleTour {
  id?: number;
  property: Partial<Property>;
  tourDate: string;
  tourTime: string;
  name: string;
  phone: string;
  email: string;
  status?: string;
}
