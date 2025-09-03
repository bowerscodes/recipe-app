import { render } from "@/app/utils/test-utils";
import RecipeDetail from "../RecipeDetail";
import recipesData from "@/data/recipes.json";

const recipe = recipesData[0];

describe("RecipeDetail Snapshots", () => {
  test("renders RecipeDetail correctly", () => {
    const { container } = render(<RecipeDetail recipe={recipe} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders RecipeDetail with user-created recipe", () => {
    const userRecipe = {
      id: 1001,
      title: "My Custom Recipe",
      image: "https://example.com/custom.jpg",
      cookingTime: "30 minutes",
      ingredients: [
        "2 cups flour",
        "1 cup sugar",
        "3 eggs"
      ],
      instructions: [
        "Mix all dry ingredients",
        "Add wet ingredients",
        "Bake for 30 minutes"
      ],
      reviews: [
        { rating: 5, comment: "Amazing recipe!" }
      ],
      author: "me"
    };

    const { container } = render(<RecipeDetail recipe={userRecipe} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders RecipeDetail with no reviews", () => {
    const recipeWithoutReviews = {
      ...recipe,
      reviews: []
    };

    const { container } = render(<RecipeDetail recipe={recipeWithoutReviews} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
