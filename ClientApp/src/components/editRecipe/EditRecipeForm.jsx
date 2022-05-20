import React from 'react'
import PropTypes from 'prop-types';
import ReusableForm from '../reusableForm/ReusableForm';

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
    <ReusableForm
      formSubmissionHandler={handleEditRecipeFormSubmission}
      buttonText="Update Recipe" />
  )
}

EditRecipeForm.propTypes = {
  recipe: PropTypes.object,
  onEditRecipe: PropTypes.func
}
