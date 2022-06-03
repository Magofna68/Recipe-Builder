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
      <Container fluid lg={true} styles={{
        display: "flex",
        width: '100vw',
        background: 'white',
        justifyContent:  'center',
        alignContent: 'center',
        alignItems: 'center'
      }}>
        {/* <div styles="background-image: url(https://thumbs.dreamstime.com/b/cooking-kitchen-food-background-concept-spices-vegetables-ingredients-free-copy-space-abstract-127774421.jpg)"> */}
        <Row md={12}
        styles={{
          display: "flex",
        }}>
          {/* {{dummyData}.map((recipe) =>  */}
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
          img={recipe.img}
          quote={recipe.quote}
          key={recipe.id}
          timeOpen={recipe.timeOpen}
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