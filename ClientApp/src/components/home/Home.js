import React, { Component } from 'react';
import './home.scss';
import RecipeList from '../recipeList/RecipeList';
import EditRecipeForm from '../editRecipe/EditRecipeForm';
import NewRecipeForm from '../newRecipeForm/NewRecipeForm';
import RecipeDetail from '../recipeDetail/RecipeDetail';
import Button from '@mui/material/Button';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedRecipe: null,
      editing: false,
      // mainRecipeList: [],
      mainRecipeList: [
        {
          // whenRecipeClicked: {onRecipeSelection},
          id: 0,
          title: "Mama's Homemade French Gravy",
          instructions:
          "1. Pick out your favorite sauce and mix as you go. 2. Place in bowl and microwave.",
          ingredients:["Milk", "Cream", "Butter"],
          origin: "Greek",
          mealType:"Breakfast",
          rating:"4.5",
          quote: "Gravy, Baby!",
          img: "https://vegcharlotte.files.wordpress.com/2013/10/vegan-sausage-gravy-biscuits-2.jpg",
          key:0
        },
        {
          // whenRecipeClicked: {onRecipeSelection},
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
          // whenRecipeClicked: {onRecipeSelection},
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
          // whenRecipeClicked: {onRecipeSelection},
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
      ],
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedRecipe: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
// sent as prop to NRF to collect data and add recipe into state array
  handleAddingNewRecipeToList = (newRecipe) => {
    const newMainRecipeList = this.state.mainRecipeList.concat(newRecipe);
    console.log(newMainRecipeList);
    this.setState({
      mainRecipeList: newMainRecipeList,
      formVisibleOnPage: false,
    });
  }

  // being saved into array rather than object -- find bug:
  handleChangingSelectedRecipe = (id) => {
    const selectedRecipe = this.state.mainRecipeList.filter(recipe => recipe.id === id)[0];
    console.log(selectedRecipe);
    this.setState({selectedRecipe: selectedRecipe});
  }

  handleDeletingRecipe = (id) => {
    const updatedRecipeList = this.state.mainRecipeList.filter(recipe => recipe.id !== id);
    console.log(updatedRecipeList);
    this.setState({
      mainRecipeList: updatedRecipeList,
      selectedRecipe: null
    });
  }

  handleEditClick = () => {
    // const updatedRecipe = this.state.mainRecipeList.filter(recipe => recipe.id === id)
    console.log("Edit click reached!")
    this.setState({
      // mainRecipeList: mainRecipeList.concat(updatedRecipe),
      editing: true,
    })
  }

  handleEditingRecipeInList = (recipeToEdit) => {
    const editedMainRecipeList = this.state.mainRecipeList
      // .filter(recipe => recipe.id !== this.state.selectedRecipe.id)
      .filter(recipe => recipe.id !== this.state.selectedRecipe.id)
      .concat(recipeToEdit);
    console.log(recipeToEdit)
    console.log(editedMainRecipeList)
    this.setState({
      mainRecipeList: editedMainRecipeList,
      editing: false,
      selectedRecipe: null,
    })
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
    currentlyVisibleState = 
      <EditRecipeForm 
      recipe={this.state.selectedRecipe}
      onEditRecipe={this.handleEditingRecipeInList} />
    buttonText = "Return to Recipe List"
    } else if (this.state.selectedRecipe != null) {
      currentlyVisibleState = 
      <RecipeDetail 
        onClickingDelete = {this.handleDeletingRecipe}
        onClickingEdit={this.handleEditClick}
        recipe={this.state.selectedRecipe} />
      buttonText= "Return to Recipe List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewRecipeForm 
        onNewRecipeCreation={this.handleAddingNewRecipeToList}/>
      buttonText="Return to Recipe List"
    } else {
      currentlyVisibleState = 
      <RecipeList 
        onRecipeSelection={this.handleChangingSelectedRecipe}
        recipeList={this.state.mainRecipeList} />
      buttonText="Add Recipe";
  }

    return (
      <>
        <div className='homeContainer'>
          {currentlyVisibleState}
          {/* <Button variant="contained" color="success" onClick={this.handleClick}>{buttonText}</Button> */}
          <Button variant="outline-success" type="submit" onClick={this.handleClick}>{buttonText}</Button>
          
        {/* <h1>.Net/ React -- Recipe Application</h1>
          <h2>Recipe List Component</h2> */}
        </div>
      </>
    );
  }
}
