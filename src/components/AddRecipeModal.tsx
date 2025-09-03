"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";

import { useRecipeContext } from "@/context/RecipeContext";
import { Recipe } from "@/types/Recipe";
import { FaPlus, FaTrash } from "react-icons/fa";

interface AddRecipeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddRecipeModal({
  isOpen,
  onOpenChange,
}: AddRecipeModalProps) {
  const { addUserRecipe } = useRecipeContext();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    cookingTime: "",
    ingredients: [""],
    instructions: [""],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filteredIngredients = formData.ingredients.filter(
      (ingredient) => ingredient.trim() !== "",
    );
    const filteredInstructions = formData.instructions.filter(
      (instruction) => instruction.trim() !== "",
    );

    if (
      !formData.title ||
      !formData.cookingTime ||
      filteredIngredients.length === 0 ||
      filteredInstructions.length === 0
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const newRecipe: Omit<Recipe, "id"> = {
      title: formData.title,
      image:
        formData.image ||
        "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
      cookingTime: formData.cookingTime,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
      reviews: [],
      author: "me",
    };

    addUserRecipe(newRecipe);

    // Reset form
    setFormData({
      title: "",
      image: "",
      cookingTime: "",
      ingredients: [""],
      instructions: [""],
    });

    onOpenChange(false);
  };

  const addIngredient = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  const removeIngredient = (index: number) => {
    if (formData.ingredients.length > 1) {
      setFormData((prev) => ({
        ...prev,
        ingredients: prev.ingredients.filter((_, i) => i !== index),
      }));
    }
  };

  const updateIngredient = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ingredient, i) =>
        i === index ? value : ingredient,
      ),
    }));
  };

  const addInstruction = () => {
    setFormData((prev) => ({
      ...prev,
      instructions: [...prev.instructions, ""],
    }));
  };

  const removeInstruction = (index: number) => {
    if (formData.instructions.length > 1) {
      setFormData((prev) => ({
        ...prev,
        instructions: prev.instructions.filter((_, i) => i !== index),
      }));
    }
  };

  const updateInstruction = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      instructions: prev.instructions.map((instruction, i) =>
        i === index ? value : instruction,
      ),
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      size="2xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader>Add new recipe</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Recipe title"
                placeholder="Enter recipe title"
                variant="bordered"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                isRequired
              />
              <Input
                label="Image URL"
                placeholder="Enter image URL (optional)"
                variant="bordered"
                value={formData.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
              />
              <Input
                label="Cooking Time"
                placeholder="e.g., 30 minutes"
                variant="bordered"
                value={formData.cookingTime}
                onChange={(e) =>
                  handleInputChange("cookingTime", e.target.value)
                }
                isRequired
              />

              {/* Ingredients */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">Ingredients</label>
                  <Button
                    size="sm"
                    color="primary"
                    variant="flat"
                    startContent={<FaPlus />}
                    onPress={() => addIngredient(formData.ingredients.length)}
                  >
                    Add ingredient
                  </Button>
                </div>
                <div>
                  {formData.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Input
                        placeholder={`Ingredient ${index + 1}`}
                        variant="bordered"
                        value={ingredient}
                        onChange={(e) =>
                          updateIngredient(index, e.target.value)
                        }
                        className="flex-1"
                      />
                      <Button
                        size="sm"
                        color="danger"
                        variant="flat"
                        isIconOnly
                        onPress={() => removeIngredient(index)}
                        isDisabled={formData.ingredients.length === 1}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insructions */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">Instructions</label>
                  <Button
                    size="sm"
                    color="primary"
                    variant="flat"
                    startContent={<FaPlus />}
                    onPress={addInstruction}
                  >
                    Add Step
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-sm text-gray-500 pt-3 w-8">
                        {index + 1}.
                      </span>
                      <Input
                        placeholder={`Step ${index + 1}`}
                        variant="bordered"
                        value={instruction}
                        onChange={(e) =>
                          updateInstruction(index, e.target.value)
                        }
                        className="flex-1"
                      />
                      <Button
                        size="sm"
                        color="danger"
                        variant="flat"
                        isIconOnly
                        onPress={() => removeInstruction(index)}
                        isDisabled={formData.instructions.length === 1}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Add Recipe
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
