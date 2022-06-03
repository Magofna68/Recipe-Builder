import React from 'react'
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StarIcon from '@mui/icons-material/Star';
import './recipeDetail.scss';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';


export default function RecipeDetail(props) {
  const { recipe, onClickingDelete, onClickingEdit } = props;
  // deconstruct props
  return (
    <>
      <Container fluid>
        <Row lg={true}>
          <Col>
            {/* <h1>Recipe Detail Page</h1> */}
            <h1>{recipe.title}</h1><hr/>
            <div>
              <h4>{recipe.rating} <StarIcon />{recipe.origin} dish - Enjoy it for {recipe.mealType} </h4>
            </div>
            <br/>
            <div className="ingredientContainer">
              <h4>Here's what you'll need:</h4>
              {/* <ul>{separatedIngredients.map((ingredient) => { */}
              <ul>{recipe.ingredients.map((ingredient) => {
                return (
                    <li>
                      {ingredient}
                    </li>
                )
              })}
              </ul>
            </div>
            <h4>Instructions: </h4>
            <ol>
            {recipe.instructions.map((instructions) => {
              return (
                <li>
                  {instructions}<br/>
                </li>
              )
            })}
            </ol>
            <Button 
              id="updateButton"
              variant="outline-success" 
              onClick={() => onClickingEdit()}>Update Recipe</Button>
            {/* <Button 
              variant="outline-danger" 
              onClick={()=> onClickingDelete(recipe.id)}>Delete Recipe</Button> */}
            <DeleteSharpIcon fontSize="large" onClick={()=> onClickingDelete(recipe.id)} />
          </Col>
          <Col>
              <img src={recipe.img} alt="test" styles={{ }} />
          </Col>
        </Row>
      </Container>
      <hr/>
    </>
  );
}
// remember to add formatted wait time for posting dates

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
}