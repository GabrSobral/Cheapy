import { ICategory } from "./ICategory";
import { IPhotos } from "./IPhotos";

export interface IProduct {
  id: string,
  name: string,
  description: string,
  discount: number,
  price: number,
  feedbacks: number,
  average_rating: number,
  tags: ICategory[]
  advertiser: {
    id: string,
    name: string
  },
  thumb: IPhotos,
  images: IPhotos[],
}