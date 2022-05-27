import React from 'react';
import Recipe from '../recipe/Recipe';
import PropTypes from 'prop-types';


export default function RecipeList(props) {
  const { recipeList, onRecipeSelection } = props;
  
  return (
    <>
      <h1>Recipe List</h1>
      <hr/>
      {recipeList.map((recipe) =>
        <Recipe
          //function being passed down through prop drilling from Home -- onRecipeSelection
          whenRecipeClicked={onRecipeSelection}
          id={recipe.id}
          title={recipe.title}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          origin={recipe.origin}
          mealType={recipe.mealType}
          rating={recipe.rating}
          key={recipe.id}
        />
      )}
    </>
  );
}

RecipeList.propTypes = {
  recipeList: PropTypes.array,
  onRecipeSelection: PropTypes.func,
}