import { IUser } from "./IUser";

export interface IFeedback {
  id: string,
  title: string,
  stars: number,
  content: string,
  recomendation: boolean,
  user: IUser
}