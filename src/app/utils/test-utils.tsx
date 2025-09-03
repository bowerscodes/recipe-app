import { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { HeroUIProvider } from "@heroui/react";
import RecipeProvider from "@/context/RecipeContext";

const AllProviders = ({ children }: { children: ReactNode }) => (
  <HeroUIProvider>
    <RecipeProvider>{children}</RecipeProvider>
  </HeroUIProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
