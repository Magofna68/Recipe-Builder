import React from 'react'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './recipe.scss';

export default function Recipe(props) {
  return (
    <>
      <Card style={{ width: '18rem' }} className="text-center" onClick={() => props.whenRecipeClicked(props.id)}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Title>{props.ingredients}</Card.Title>
        <Card.Subtitle>{props.origin}</Card.Subtitle>
        <Card.Text>{props.instructions}</Card.Text>
        <Card.Footer muted>{props.mealType} -- {props.rating}</Card.Footer>
      </Card>
    </>
  );
}

// will need to update ingredients prop type to match array of numerous
// ingredients and measurements being added to recipe
Recipe.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.string,
  origin: PropTypes.string,
  mealType: PropTypes.string,
  rating: PropTypes.string,
}
