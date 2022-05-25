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
      mainRecipeList: [],
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

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = 
        <EditRecipeForm />
      buttonText = "Return to Recipe List"
    } else if (this.state.selectedRecipe != null) {
      currentlyVisibleState = 
      <RecipeDetail />
      buttonText= "Return to Recipe List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewRecipeForm 
        onNewRecipeCreation={this.handleAddingNewRecipeToList}/>
      buttonText="Return to Recipe List"
    } else {
      currentlyVisibleState = 
      <RecipeList 
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
