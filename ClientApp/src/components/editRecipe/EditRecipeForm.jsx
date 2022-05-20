import React from 'react'
import PropTypes from 'prop-types';

export default function EditRecipeForm(props) {
  const { recipe } = props;

  function handleEditRecipeFormSubmission(e) {
    e.preventDefault();
    props.onEditRecipe({
      id: recipe.id,
      title: e.target.title.value,
      instructions: e.target.instructions.value,
      ingredients: e.target.ingredients.value,
      origin: e.target.origin.value,
      mealType: e.target.mealType.value,
      rating: e.target.rating.value,
    })
  }

  return (
    <div>EditRecipeForm</div>
  )
}

EditRecipeForm.propTypes = {
  recipe: PropTypes.object,
  onEditRecipe: PropTypes.func
}
