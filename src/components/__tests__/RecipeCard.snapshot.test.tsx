import { render } from "@/app/utils/test-utils";
import RecipeCard from "../RecipeCard";
import recipesData from "@/data/recipes.json";

const recipe = recipesData[0];

describe("RecipeCard Snapshots", () => {
  test("renders RecipeCard correctly", () => {
    const { container } = render(<RecipeCard recipe={recipe} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders RecipeCard with different recipe data", () => {
    const customRecipe = {
      id: 999,
      title: "Test Recipe",
      image: "https://example.com/test.jpg",
      cookingTime: "15 minutes",
      ingredients: ["Test ingredient 1", "Test ingredient 2"],
      instructions: ["Test step 1", "Test step 2"],
      reviews: [],
      author: "me"
    };

    const { container } = render(<RecipeCard recipe={customRecipe} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
