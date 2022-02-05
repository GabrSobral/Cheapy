import { ICategory } from "./ICategory";
import { IPhotos } from "./IPhotos";

export interface IProduct {
  id: string,
  name: string,
  description: string,
  discount: number,
  price: number,
  feedbacks: number,
  averageRating: number,
  tags: ICategory[]
  stock: number;
  advertiser: {
    id: string,
    name: string
  },
  thumb: string,
  images: IPhotos[],
  isFavorited: boolean | null,
}