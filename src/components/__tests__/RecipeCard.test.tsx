import { screen } from "@testing-library/react";

import { render } from "@/app/utils/test-utils";
import RecipeCard from "../RecipeCard";
import recipesData from "../../data/recipes.json"

const recipe = recipesData[0];

test("renders RecipeCard with title, image, cooking time and ingredients", () => {
  render(<RecipeCard recipe={recipe} />);
  expect(screen.getByText(recipe.title)).toBeInTheDocument();
  expect(screen.getByAltText(`Image of ${recipe.title}`)).toBeInTheDocument();
  expect(screen.getByText(recipe.cookingTime)).toBeInTheDocument();
  expect(screen.getByText(`${recipe.ingredients.length} Ingredients`)).toBeInTheDocument();
});

test("renders RecipeCard with FavouriteButton", () => {
  render(<RecipeCard recipe={recipe} />);
  expect(
    screen.getByRole("button", {
      name: new RegExp(`(Add|Remove) ${recipe.title} to favourites`)
    })
  ).toBeInTheDocument();
});
