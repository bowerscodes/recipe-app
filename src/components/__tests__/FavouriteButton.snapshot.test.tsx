import { render } from "@/app/utils/test-utils";
import FavouriteButton from "../FavouriteButton";
import recipesData from "@/data/recipes.json";

const recipe = recipesData[0];

describe("FavouriteButton Snapshots", () => {
  test("renders FavouriteButton in unfavourited state", () => {
    const { container } = render(<FavouriteButton recipe={recipe} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders FavouriteButton with user recipe", () => {
    const userRecipe = {
      id: 1001,
      title: "My Recipe",
      image: "",
      cookingTime: "20 minutes",
      ingredients: ["ingredient 1"],
      instructions: ["step 1"],
      reviews: [],
      author: "me"
    };

    const { container } = render(<FavouriteButton recipe={userRecipe} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
