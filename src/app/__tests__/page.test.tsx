import { render, screen, fireEvent } from "@/app/utils/test-utils";
import Home from "../page";

describe("Home Page", () => {
  test("renders filter buttons and switches between views", () => {
    render(<Home />);
    
    expect(screen.getByText(/All Recipes/)).toBeInTheDocument();
    expect(screen.getByText(/Favorites/)).toBeInTheDocument();
    expect(screen.getByText(/My Recipes/)).toBeInTheDocument();
    
    // Test initial state shows all recipes button is present
    expect(screen.getByText(/All Recipes \(\d+\)/)).toBeInTheDocument();
    
    // Test filter buttons are clickable
    const favoritesButton = screen.getByText(/Favorites/);
    const myRecipesButton = screen.getByText(/My Recipes/);
    
    fireEvent.click(favoritesButton);
    expect(favoritesButton).toBeInTheDocument();
    
    fireEvent.click(myRecipesButton);
    expect(myRecipesButton).toBeInTheDocument();
  });

  test("renders Add Recipe button", () => {
    render(<Home />);
    expect(screen.getByText("Add Recipe")).toBeInTheDocument();
  });

  test("displays recipe count in filter buttons", () => {
    render(<Home />);
    
    // Should show counts in parentheses
    expect(screen.getByText(/All Recipes \(\d+\)/)).toBeInTheDocument();
    expect(screen.getByText(/Favorites \(\d+\)/)).toBeInTheDocument();
    expect(screen.getByText(/My Recipes \(\d+\)/)).toBeInTheDocument();
  });
});