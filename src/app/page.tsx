"use client";

import RecipeCard from "@/components/RecipeCard";
import recipesData from "../data/recipes.json"
import { Recipe } from "@/types/Recipe";
import { useRecipeContext } from "@/context/RecipeContext";
import { Button, useDisclosure } from "@heroui/react";
import { useState } from "react";
import AddRecipeModal from "@/components/AddRecipeModal";

export default function Home() {
  const { userRecipes } = useRecipeContext();
  const [filter, setFilter] = useState<"all" | "mine">("all");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const allRecipes = [...recipesData as Recipe[], ...userRecipes];
  const filteredRecipes = filter === "mine"
    ? allRecipes.filter(recipe => recipe.author === "me")
    : allRecipes;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2>Recipes</h2>
        <Button color="primary" onPress={onOpen}>
          Add Recipe
        </Button>
      </div>

      <div className="flex gap-2 mb-6">
        <Button 
          variant={filter === "all" ? "solid" : "flat"}
          color={filter === "all" ? "primary" : "default"}
          onPress={() => setFilter("all")}
        >
          All Recipes ({allRecipes.length})
        </Button>
        <Button 
          variant={filter === "mine" ? "solid" : "flat"}
          color={filter === "mine" ? "primary" : "default"}
          onPress={() => setFilter("mine")}
        >
          My Recipes ({userRecipes.length})
        </Button>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">
            {filter === "mine" 
              ? "You haven't added any recipes yet." 
              : "No recipes found."
            }
          </p>
          {filter === "mine" && (
            <Button color="primary" onPress={onOpen}>
              Add Your First Recipe
            </Button>
          )}
        </div>
      ) : (
        <main className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {filteredRecipes.map((recipe: Recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </main>
      )}

      <AddRecipeModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
