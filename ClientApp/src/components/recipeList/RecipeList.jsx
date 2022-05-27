import React from 'react';
import Recipe from '../recipe/Recipe';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default function RecipeList(props) {
  const { recipeList, onRecipeSelection } = props;
  
  const dummyData = [
    {
      whenRecipeClicked: {onRecipeSelection},
      id: 0,
      title: "Mama's Homemade French Gravy",
      instructions:
      "1. Pick out your favorite sauce and mix as you go. 2. Place in bowl and microwave.",
      ingredients:"Milk, Your secret ingredient, & Butter",
      origin: "Greek",
      mealType:"Breakfast",
      rating:"4.5",
      key:0
    },
    {
      whenRecipeClicked: {onRecipeSelection},
      id: 1,
      title: "Mama's Homemade Hummus",
      instructions:
      "1. Pick out your favorite hummus.",
      ingredients:"Hummus",
      origin: "Comfort",
      mealType:"Snack",
      rating:"3.5",
      key:1
    },
    {
      whenRecipeClicked: {onRecipeSelection},
      id: 2,
      title: "Mama's Homemade Hamburgers",
      instructions:
      "1. Pick out your favorite burger 2. Put Mama's sauce on it.",
      ingredients:"Burger & Mama Sauce",
      origin: "Traditional American",
      mealType: "Dinner",
      rating:"5.0",
      key:2
    },
    {
      whenRecipeClicked: {onRecipeSelection},
      id: 3,
      title: "Mama's Homemade Fries",
      instructions:
      "1. Pick your Size 2. Get your Fries.",
      ingredients:"Potatoe & Butter",
      origin: "French",
      mealType:"Snack",
      rating:"4.5",
      key:3
    },

  ]

  return (
    <>
      <h1>Recipe List</h1>
      <hr/>
      <Container styles={{
        display: "flex",
      }}>
        <Row>
      {/* {recipeList.map((recipe) => */}
      {dummyData.map((recipe) => 
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