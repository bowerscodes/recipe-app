import { notFound } from "next/navigation";

import { Recipe } from "@/types/Recipe";
import recipesData from "@/data/recipes.json";
import RecipeDetail from "@/components/RecipeDetail";

interface PageProps {
  params: { id: string }
};

export default function RecipeDetailPage({ params }: PageProps) {
  const recipes = recipesData as Recipe[];
  const recipe = recipes.find(recipe => recipe.id === parseInt(params.id));

  if (!recipe) {
    return notFound();
  }

  return (
    <RecipeDetail recipe={recipe} />
  )
};
