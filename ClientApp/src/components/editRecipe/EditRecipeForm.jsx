import React from 'react'
import PropTypes from 'prop-types';
import ReusableForm from '../reusableForm/ReusableForm';

export default function EditRecipeForm(props) {
  const { recipe, onEditRecipe } = props;

  function handleEditRecipeFormSubmission(e) {
    e.preventDefault();
    props.onEditRecipe({
      id: recipe.id,
      title: e.target.title.value,
      ingredients: e.target.ingredients.value,
      instructions: e.target.instructions.value,
      origin: e.target.origin.value,
      mealType: e.target.mealType.value,
      rating: e.target.rating.value,
    });
  }

  return (
    <>
      <ReusableForm
        buttonText="Update Recipe" 
        onClickingEdit={onEditRecipe}/>
        formSubmissionHandler={handleEditRecipeFormSubmission}
    </>
  )
}

EditRecipeForm.propTypes = {
  recipe: PropTypes.object,
  onEditRecipe: PropTypes.func
}
