import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

import { Recipe } from "@/types/Recipe";

interface RecipeDetailProps {
  recipe: Recipe;
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  return (
    <div className="mt-6 mx-10">
      <Link href="/">← Back to Recipes</Link>

      <div className="mt-2">
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-lg p-6 h-[200px] flex flex-col justify-end"
          style={{ backgroundImage: `url(${recipe.image})` }}
        >

          {/* Header Image tint */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          />
          
          <h1 className="text-white mb-0 z-10">{recipe.title}</h1>
          <p className="text-white font-semibold z-10">{recipe.cookingTime}</p>
        </div>

        <div className="mt-4">
          <Card>
            <CardHeader>
              <h2>Ingredients</h2>
            </CardHeader>
            <CardBody>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="mt-4">
          <Card>
            <CardHeader>
              <h2>Instructions</h2>
            </CardHeader>
            <CardBody>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-[2rem_1fr] gap-2 mb-2"
                  >
                    <span className="text-right">{index + 1 + "."}</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardBody>
          </Card>
        </div>

        <div className="mt-4">
          <Card>
            <CardHeader>
              <h3>Reviews</h3>
            </CardHeader>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 pb-3">
              {recipe.reviews.map((review, index) => (
                <Card key={index}>
                  <li className="bg-white p-4 flex flex-col items-center">
                    <span className="font-bold">{review.rating + " / 5 "}</span>
                    {<em>&quot;{review.comment}&quot;</em>}
                  </li>
                </Card>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
