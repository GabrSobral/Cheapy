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
  advertiser: {
    id: string,
    name: string
  },
  thumb: string,
  images: IPhotos[],
}