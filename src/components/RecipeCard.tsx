"use client";

import { useRouter } from "next/navigation";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";

import { Recipe } from "@/types/Recipe";
import FavouriteButton from "./FavouriteButton";

interface RecipeCardProps {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const router = useRouter();

  return (
    <Card 
      className="p-4"
      isPressable
      onPress={() => router.push(`/recipe/${recipe.id}`)}
    >
      <div className="flex justify-between">
        <h3>{recipe.title}</h3>
        <FavouriteButton recipe={recipe} />
      </div>
      <Image 
        alt={`Image of ${recipe.title}`}
        src={recipe.image}
      />
      <div className="mt-2">
        <p>{recipe.cookingTime}</p>
        <p>{recipe.ingredients.length} Ingredients</p>
      </div>
    </Card>
  )
}

