import { screen } from "@testing-library/react";
import { render } from "@/app/utils/test-utils";

import RecipeCard from "../RecipeCard";
import { Recipe } from "@/types/Recipe";

const recipe: Recipe = {
  id: 1,
  title: "Lasagne & Chips",
  image: "",
  cookingTime: "45 minutes",
  ingredients: ["A", "B"],
  instructions: ["Step 1"],
  reviews: [],
};

test("renders RecipeCard with title and ingredients", () => {
  render(<RecipeCard recipe={recipe} />);
  expect(screen.getByText("Lasagne & Chips")).toBeInTheDocument();
  expect(screen.getByText("2 Ingredients")).toBeInTheDocument();
});
