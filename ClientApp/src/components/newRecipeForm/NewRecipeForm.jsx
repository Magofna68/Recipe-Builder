import React from 'react'
import ReusableForm from '../reusableForm/ReusableForm'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

// not class based component, so function, not method. Methods = called on instances of a class
// export default
 function NewRecipeForm(props) {

  function handleNewRecipeFormSubmission(e) {
    // Refresh === default behavior; hence preventing that
    e.preventDefault();
    // Because a function component doesn't have this as a reference like a class component,
    // we need to directly refer to the props passed into the function component.
    // That's why we do props.onNewTicketCreation() instead of this.onNewTicketCreation()
    console.log(e.target);
    props.onNewRecipeCreation({
      id: v4(),
      title: e.target.title.value,
      instructions: e.target.instructions.value,
      ingredients: e.target.ingredients.value,
      rating: e.target.rating.value,
      // moment.js -- need to find way to set state to reflect when recipe was posted
      // timeOpen: new Moment().fromNow(true),
      timeOpen: new Moment().format("D/M/YY"),
      formattedWaitTime: new Moment().format("MMM Do, YYYY"),
      // Need to rework how values are being est and being stored -- stretch
      // origin: e.target.origin.value,
      // mealType: e.target.mealType.value,
    });
    // console.log(e.target.rating.value);
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

export default NewRecipeForm;
