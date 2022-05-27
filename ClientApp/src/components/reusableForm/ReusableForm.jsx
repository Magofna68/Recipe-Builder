import React, { useState } from 'react'
import PropTypes from 'prop-types';
// import './reusableForm.css';
import Button from 'react-bootstrap/Button';
import Rating from "@mui/material/Rating";
import Form from 'react-bootstrap/Form';
// import ComboBox from './AutoComplete';
import ComboBox from './ComboBox';
import MultipleSelectCheckmarks from './MealSelection';

export default function ReusableForm(props) {
  const [ value, setValue ] = useState(null);
  console.log(value)


  const cuisineOriginArray = [
    {title: 'American', value: 'American'},
    {title: 'Chinese', value: 'Chinese'},
    {title: 'Comfort', value: 'Comfort'},
    {title: 'French', value: 'French'},
    {title: 'Greek', value: 'Greek'},
    {title: 'Italian', value: 'Italian'},
    {title: 'Indian', value: 'Indian'},
    {title: 'Japanese', value: 'Japanese'},
    {title: 'Mediterranean', value: 'Mediterranean'},
    {title: 'Oriental', value: 'Oriental'},
    {title: 'Spanish', value: 'Spanish'},
    {title: 'Thai', value: 'Thai'},
    {title: 'Other', value: 'Other'},
  ];

  const handleAddingFoodOriginClick = (newValues) => {
    const updatedValues = [...value].concat(newValues);
    setValue(updatedValues);
    console.log(value)
  }


  return (
    <>
      <br/>
      <div className="form-center">
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="title" name="title" placeholder="Enter Recipe Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Meal Type:</Form.Label> */}
          <MultipleSelectCheckmarks type="mealTypes" name="mealTypes" placeholder="Meal Type:"/>
        </Form.Group>
        {/* <ComboBox  
          type="origin" 
          name="origin" 
          value="value" 
          cuisineOrigin={cuisineOriginArray}
          onClick={handleAddingFoodOriginClick}/> */}
        <Form.Group className="mb-3">
          <Form.Label>Ingredients:</Form.Label>
          <Form.Control type="ingredients" name="ingredients" placeholder="What does the recipe call for?" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Instructions:</Form.Label>
          <Form.Control as="textarea" rows={3} type="instructions" name="instructions" placeholder="What steps are required?" />
        </Form.Group>
      <Rating 
        name="rating"
        type="rating"
        // value={value} 
        defaultValue={2.5} 
        precision={0.5} 
        size="large"/><br/><br/>
        <Button variant="outline-success" type="submit">{props.buttonText}</Button>
        </Form>
      </div><br/><hr/>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};