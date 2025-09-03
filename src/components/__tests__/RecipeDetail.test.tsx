import { screen } from "@testing-library/react";

import { render } from "@/app/utils/test-utils";
import RecipeDetail from "../RecipeDetail";
import recipesData from "../../data/recipes.json"

const recipe = recipesData[0];

test("renders RecipeDetail with title, cooking time, ingredients, instructions, and reviews", () => {
  render(<RecipeDetail recipe={recipe} />);
  expect(screen.getByText("Lasagne & Chips")).toBeInTheDocument();
  expect(screen.getByText("45 minutes")).toBeInTheDocument();
  expect(screen.getByText("Ingredients")).toBeInTheDocument();
  expect(screen.getByText("Instructions")).toBeInTheDocument();
  expect(screen.getByText("Reviews")).toBeInTheDocument();

  // Check for some ingredients
  expect(screen.getByText("200g Lasagne Sheets")).toBeInTheDocument();
  expect(screen.getByText("1 onion")).toBeInTheDocument();

  // Check for some instructions
  expect(screen.getByText("Fry the onions and garlic in a medium frying pan until softened")).toBeInTheDocument();

  // Check for reviews
  expect(screen.getByText(/Delicious! Best lasagne/i)).toBeInTheDocument();
  expect(screen.getByText(/Tasty, but could do with some grated cheese/i)).toBeInTheDocument();
});
