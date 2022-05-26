import React from 'react'
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';

export default function RecipeDetail(props) {
  const {recipe} = props;
  // deconstruct props

  return (
    <>
      <Container>
        <h1>Recipe Detail Page</h1>
        <br/>
        <h1>{recipe.title}</h1>
        <h3>{recipe.rating} star {recipe.origin} dish<br/> Enjoy it for {recipe.mealType}</h3>
        <ul><li>{recipe.ingredients}</li></ul>
        <p>{recipe.instructions}</p>
      </Container>
    </>
  );
}
// remember to add formatted wait time for posting dates

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
}