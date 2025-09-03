"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface RecipeContextType {
  favourites: number[];
  toggleFavourite: (id: number) => void;
  isFavourite: (id: number ) => boolean;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export default function RecipeProvider({ children }: { children: React.ReactNode }) {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("recipe-favourites");

    if (saved) {
      setFavourites(JSON.parse(saved));
    }
  }, []);

  const toggleFavourite = (id: number) => {
    const newFavourites = favourites.includes(id)
      ? favourites.filter(fav => fav !== id)
      : [...favourites, id];

    setFavourites(newFavourites);

    if (mounted) {
      localStorage.setItem("recipe-favuorites", JSON.stringify(newFavourites));
    }
  }

  const isFavourite = (id: number) => favourites.includes(id);

  return (
    <RecipeContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </RecipeContext.Provider>
  )
}

export function useRecipeContext() {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("useRecipeContext must be used within RecipeProvider");
  }

  return context;
};
