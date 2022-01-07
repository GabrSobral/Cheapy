export interface IFeedback {
  title: string;
  stars: number;
  message: string;
  recomendation: boolean;
  createdAt: Date;
  averageRating: number;
  user: {
    id: string;
    name: string;
    photo: string;
  }
}