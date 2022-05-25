import React from 'react'
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap';
import '.recipe.scss';

export default function RecipeDetail(props) {
  return (
    <>
      <Card style={{ width: '18rem' }} className="text-center" onClick={() => props.whenRecipeClicked(props.id)}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Title>{props.ingredients}</Card.Title>
        <Card.Subtitle>{props.origin}</Card.Subtitle>
        <Card.Text>{props.instructions}</Card.Text>
        <Card.Footer>{props.mealType} -- {props.rating}</Card.Footer>
      </Card>
    </>
  );
}
// remember to add formatted wait time for posting dates

RecipeDetail.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  origin: PropTypes.string,
  mealType: PropTypes.string,
  rating: PropTypes.string.isRequired,
}