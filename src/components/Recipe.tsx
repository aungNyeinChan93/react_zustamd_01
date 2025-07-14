import React from "react";
import useRecipe from "../stores/UseRecipe";

const Recipe = () => {
  const { recipes, addRecipe, removeRecipe } = useRecipe((store) => store);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recipeSubmit = (data: any) => {
    const recipeData = {
      id: Number(recipes.length + 1),
      name: data.get("name"),
      category: data.get("category"),
    };
    addRecipe(recipeData);
  };
  return (
    <React.Fragment>
      <section>
        <form action={recipeSubmit}>
          <input type="text" name="name" id="" />
          <input type="text" name="category" id="" />
          <button type="submit"> Add </button>
        </form>
      </section>
      <section>
        {recipes &&
          recipes?.map((recipe) => {
            return (
              <div
                className=" cursor-pointer"
                onClick={() => removeRecipe(Number(recipe.id))}
                key={recipe.id}
              >
                {recipe.name}
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default Recipe;
