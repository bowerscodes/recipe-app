export interface Recipe {
  id: number;
  title: string;
  image: string;
  cookingTime: string; 
  ingredients: string[];
  instructions: string[];
  reviews: Review[];
  author: string;
};

export interface Review {
  rating: number;
  comment: string;
};