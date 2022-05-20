import React from 'react';
import Recipe from '../recipe/Recipe';
import PropTypes from 'prop-types';


export default function RecipeList(props) {

  return (
    <>
      <h1>Recipe List</h1>
      {props.recipeList.map((recipe) =>
        <Recipe
          id={recipe.id}
          key={recipe.id}
          title={recipe.title}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          origin={recipe.origin}
          mealType={recipe.mealType}
          rating={recipe.rating}
        />
      )}
    </>
  );
}

RecipeList.propTypes = {
  recipeList: PropTypes.array,
  onRecipeSelection: PropTypes.func,
}