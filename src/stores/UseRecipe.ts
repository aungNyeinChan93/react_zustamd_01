import { create } from "zustand";

type Recipe = {
    id: number;
    name: string,
    category: string
}

type RecipeStore = {
    recipes: Recipe[],
    addRecipe: (newRecipe: Recipe) => void,
    removeRecipe: (id: number) => void,
}

const useRecipe = create<RecipeStore>((set) => ({
    recipes: [],
    addRecipe: (newRecipe: Recipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    removeRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),

}));

export default useRecipe;