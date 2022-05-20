import React from 'react'
import ReusableForm from '../reusableForm/ReusableForm'
import PropTypes from 'prop-types';

export default function NewRecipeForm(props) {
  function handleNewRecipeFormSubmission(e) {
    e.preventDefault();
    props.onNewRecipeCreation({
      // id: recipe.id,
      title: e.target.title.value,
      instructions: e.target.instructions.value,
      ingredients: e.target.ingredients.value,
      origin: e.target.origin.value,
      mealType: e.target.mealType.value,
      rating: e.target.rating.value,
    })
  }

  return (
    <>
      <h1>What're we creating today?</h1><hr/>
      <div className="formContainer">
        <ReusableForm 
          formSubmissionHandler={handleNewRecipeFormSubmission}
          buttonText="Add Recipe!"
        />
      </div>
    </>
  )
}

NewRecipeForm.propTypes = {
  onNewRecipeCreation: PropTypes.func,
}
