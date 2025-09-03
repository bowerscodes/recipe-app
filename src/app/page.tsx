

import RecipeCard from "@/components/RecipeCard";
import recipesData from "../data/recipes.json"
import { Recipe } from "@/types/Recipe";

export default function Home() {
  const recipes = recipesData as Recipe[];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2>Recipes</h2>
      <main className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </main>
    </div>
  );
}
