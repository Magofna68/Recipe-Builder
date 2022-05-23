import React from 'react'
import PropTypes from 'prop-types';
// import './reusableForm.css';
import Button from 'react-bootstrap/Button';
import Rating from "@mui/material/Rating";
import Form from 'react-bootstrap/Form';
// import ComboBox from './AutoComplete';
import ComboBox from './AutoComplete';
import MultipleSelectCheckmarks from './MealSelection';

export default function ReusableForm(props) {


  return (
    // <>
    <React.Fragment>
      <br/>
      <div className="form-center">
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="title" name="title" placeholder="Enter Recipe Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Meal Type:</Form.Label> */}
          <MultipleSelectCheckmarks />
        </Form.Group>
        <ComboBox />
        <Form.Group className="mb-3">
          <Form.Label>Ingredients:</Form.Label>
          <Form.Control type="ingredients" name="ingredients" placeholder="What does the recipe call for?" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Instructions:</Form.Label>
          <Form.Control as="textarea" rows={3} type="instructions" name="instructions" placeholder="What steps are required?" />
        </Form.Group>
        {/* <Form.Group className='mb-3'>
          <Form.Label>Meal Type:</Form.Label>
          <Form.Control type="mealType" name="mealType" placeholder="Breakfast, Lunch, Dinner..."/>
        </Form.Group> */}
        {/* <Form.Group className='mb-3'>
          <Form.Label>Cultural Origin:</Form.Label>
          <Form.Control type="origin" name="origin" placeholder="What type of food is it?"/>
        </Form.Group> */}
        {/* <Form.Group className='mb-3'>
          <Form.Label>Rating:</Form.Label>
          <Form.Control type="rating" name="rating" placeholder="0-5 stars"/>
        </Form.Group> */}
      </Form>
      <Rating 
        name="half-rated" 
        // getLabelText={getLabelText} 
        // value={value} 
        defaultValue={2.5} 
        precision={0.5} 
        size="large"/><br/><br/>
        <Button variant="outline-success" type="submit">{props.buttonText}</Button>
      </div><br/><hr/>
    </React.Fragment>
    // </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};