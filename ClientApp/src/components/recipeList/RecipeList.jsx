import React from 'react';
import Recipe from '../recipe/Recipe';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default function RecipeList(props) {
  const { recipeList, onRecipeSelection } = props;
  
  return (
    <>
      <h1>Recipe List</h1>
      <hr/>
      <Container styles={{
        display: "flex",
      }}>
        <Row>
      {recipeList.map((recipe) =>
        <Recipe
          //function being passed down through prop drilling from Home -- onRecipeSelection
          whenRecipeClicked={onRecipeSelection}
          id={recipe.id}
          title={recipe.title}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          origin={recipe.origin}
          mealType={recipe.mealType}
          rating={recipe.rating}
          key={recipe.id}
        />
      )}
      </Row>
      </Container>
    </>
  );
}

RecipeList.propTypes = {
  recipeList: PropTypes.array,
  onRecipeSelection: PropTypes.func,
}