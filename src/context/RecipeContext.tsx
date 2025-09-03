"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Recipe } from "@/types/Recipe";

interface RecipeContextType {
  favourites: number[];
  toggleFavourite: (id: number) => void;
  isFavourite: (id: number ) => boolean;
  userRecipes: Recipe[];
  addUserRecipe: (recipe: Omit<Recipe, "id">) => void;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export default function RecipeProvider({ children }: { children: React.ReactNode }) {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedFavourites = localStorage.getItem("recipe-favourites");
    const savedUserRecipes = localStorage.getItem("user-recipes");

    if (savedFavourites) {
      setFavourites(JSON.parse(savedFavourites));
    }

    if (savedUserRecipes) {
      setUserRecipes(JSON.parse(savedUserRecipes));
    }
  }, []);

  const toggleFavourite = (id: number) => {
    const newFavourites = favourites.includes(id)
      ? favourites.filter(fav => fav !== id)
      : [...favourites, id];

    setFavourites(newFavourites);

    if (mounted) {
      localStorage.setItem("recipe-favourites", JSON.stringify(newFavourites));
    }
  };

  const addUserRecipe = (recipe: Omit<Recipe, "id">) => {
    const newId = Math.max(...userRecipes.map(recipe => recipe.id), 1000) + 1;
    const newRecipe: Recipe = {
      ...recipe,
      id: newId,
      author: "me"
    };

    const updatedUserRecipes = [...userRecipes, newRecipe];
    setUserRecipes(updatedUserRecipes);

    if (mounted) {
      localStorage.setItem("user-recipes", JSON.stringify(updatedUserRecipes));
    }
  };

  const isFavourite = (id: number) => favourites.includes(id);

  return (
    <RecipeContext.Provider value={{ 
      favourites, 
      toggleFavourite, 
      isFavourite, 
      userRecipes, 
      addUserRecipe 
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export function useRecipeContext() {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("useRecipeContext must be used within RecipeProvider");
  }

  return context;
};
