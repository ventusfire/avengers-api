import { Comic } from './comic';

export interface AvengerModel {
  name: string;
  description: string;
  thumbnail: string;
  comics: Comic[];
}
