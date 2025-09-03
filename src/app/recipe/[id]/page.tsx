"use client";

import { notFound } from "next/navigation";

import { useRecipeContext } from "@/context/RecipeContext";
import { Recipe } from "@/types/Recipe";
import recipesData from "@/data/recipes.json";
import RecipeDetail from "@/components/RecipeDetail";

interface PageProps {
  params: { id: string }
};

export default function RecipeDetailPage({ params }: PageProps) {
    const { userRecipes } = useRecipeContext();
  const allRecipes = [...recipesData as Recipe[], ...userRecipes];
  const recipe = allRecipes.find(recipe => recipe.id === parseInt(params.id));

  if (!recipe) {
    return notFound();
  }

  return (
    <RecipeDetail recipe={recipe} />
  )
};
