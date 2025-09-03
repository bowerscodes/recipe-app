import { render } from "@/app/utils/test-utils";
import AddRecipeModal from "../AddRecipeModal";

describe("AddRecipeModal Snapshots", () => {
  test("renders AddRecipeModal when closed", () => {
    const mockOnOpenChange = jest.fn();
    const { container } = render(
      <AddRecipeModal isOpen={false} onOpenChange={mockOnOpenChange} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders AddRecipeModal when open", () => {
    const mockOnOpenChange = jest.fn();
    const { container } = render(
      <AddRecipeModal isOpen={true} onOpenChange={mockOnOpenChange} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
