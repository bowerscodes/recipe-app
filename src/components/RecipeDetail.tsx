

import { Recipe } from "@/types/Recipe";

interface RecipeDetailProps {
  recipe: Recipe;
};

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  )
}
