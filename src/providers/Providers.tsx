"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";

import RecipeProvider from "@/context/RecipeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <RecipeProvider>
        {children}
      </RecipeProvider>
    </HeroUIProvider>
  )
};
