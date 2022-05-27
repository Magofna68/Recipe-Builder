import React from 'react'
import PropTypes from 'prop-types';
import ReusableForm from '../reusableForm/ReusableForm';
import { v4 }from 'uuid';

export default function EditRecipeForm(props) {
  const { recipe, onEditRecipe } = props;

  function handleEditRecipeFormSubmission(e) {
    e.preventDefault();
    console.log(e)
    props.onEditRecipe({
      id: v4(),
      // id: e.target.id.value,
      title: e.target.title.value,
      ingredients: e.target.ingredients.value,
      instructions: e.target.instructions.value,
      rating: e.target.rating.value,
      // origin: e.target.origin.value,
      // mealType: e.target.mealType.value,
    });
  }

  return (
    <>
      <ReusableForm
        buttonText="Update Recipe" 
        onClickingEdit={onEditRecipe}
        formSubmissionHandler={handleEditRecipeFormSubmission}/>
    </>
  )
}

EditRecipeForm.propTypes = {
  recipe: PropTypes.object,
  onEditRecipe: PropTypes.func
}
