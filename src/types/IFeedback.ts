export interface IFeedback {
  title: string;
  stars: number;
  message: string;
  recomendation: boolean;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    photo: string;
  }
}