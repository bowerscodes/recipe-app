import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useRecipeContext } from "@/context/RecipeContext";
import { Recipe } from "@/types/Recipe";

export default function FavouriteButton({ recipe }: { recipe: Recipe }) {
  const { toggleFavourite, isFavourite } = useRecipeContext();
  const favourited = isFavourite(recipe.id);

  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        toggleFavourite(recipe.id);
      }}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          e.stopPropagation();
          toggleFavourite(recipe.id);
        }
      }}
      className="p-1 cursor-pointer"
      role="button"
      tabIndex={0}
      color={`${favourited ? "#ef4444" : "black"}`}
      aria-label={
        favourited
          ? `Remove ${recipe.title} from favourites`
          : `Add ${recipe.title} to favourites`
      }
    >
      {favourited ? (
        <FaHeart style={{ color: "#ef4444" }} />
      ) : (
        <FaRegHeart style={{ color: "black" }} />
      )}
    </span>
  );
}
