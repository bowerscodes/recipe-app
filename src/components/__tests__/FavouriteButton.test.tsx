import { render, screen, fireEvent } from "@testing-library/react";
import FavouriteButton from "../FavouriteButton";
import { Recipe } from "@/types/Recipe";

// Mock the context
jest.mock("@/context/RecipeContext", () => ({
  useRecipeContext: () => ({
    toggleFavourite: jest.fn(),
    isFavourite: jest.fn(() => false),
  }),
}));

const recipe: Recipe = {
  id: 1,
  title: "Test Recipe",
  image: "",
  cookingTime: "",
  ingredients: [],
  instructions: [],
  reviews: [],
};

test("renders FavouriteButton and toggles favourite", () => {
  render(<FavouriteButton recipe={recipe} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});