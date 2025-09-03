

import recipesData from "../data/recipes.json"
import { Recipe } from "@/types/Recipe";

export default function Home() {
  const recipes = recipesData as Recipe[];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {recipes.map((recipe: Recipe) => (
          <div key={recipe.id}>
            {recipe.title}
          </div>
        ))}
      </main>
    </div>
  );
}
