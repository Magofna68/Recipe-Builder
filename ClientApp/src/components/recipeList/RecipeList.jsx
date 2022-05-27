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
      quote: "Gravy, Baby!",
      img: "https://vegcharlotte.files.wordpress.com/2013/10/vegan-sausage-gravy-biscuits-2.jpg",
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
      quote: "This was my grandaddy's favorite",
      img: "https://thegirlmusteat.files.wordpress.com/2013/03/img_0856.jpg",
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
      quote: "Nothing better than man made burgers.",
      img: "https://nyceats.files.wordpress.com/2008/05/island-burger-005.jpg",
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
      quote: "We make em, you eat em.",
      img: "https://64.media.tumblr.com/tumblr_m0jxzwVtQn1qaiktvo1_1280.jpg",
      key:3
    },

  ]

  return (
    <>
      <h1>Recipe List</h1>
      <hr/>
      <Container fluid styles={{
        display: "flex",
        width: '90vw'
      }}>
        <Row styles={{
          display: "flex",
        }}>
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
          img={recipe.img}
          quote={recipe.quote}
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