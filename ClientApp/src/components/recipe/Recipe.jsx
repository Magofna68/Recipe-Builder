import React from 'react'
import PropTypes from 'prop-types';

export default function Recipe(props) {
  return (
    <>
    <h1>This is a recipe</h1>
    {props.title}
    {props.instructions}
    {props.ingredients}
    {props.origin}
    {props.mealType}
    {props.rating}
    </>
  );
}

Recipe.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.arr,
  origin: PropTypes.string,
  mealType: PropTypes.string,
  rating: PropTypes.number,
}
