import React from 'react'
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StarIcon from '@mui/icons-material/Star';


export default function RecipeDetail(props) {
  const { recipe, onClickingDelete, onClickingEdit } = props;
  // deconstruct props
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* <h1>Recipe Detail Page</h1> */}
            <h1>{recipe.title}</h1><hr/>
            <div>
              <h4>{recipe.rating} <StarIcon />{recipe.origin} dish - Enjoy it for {recipe.mealType} </h4>
            </div>
            <br/><br/>
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
            <h3>Instructions: </h3><p>{recipe.instructions}</p>
            <Button variant="outline-success" onClick={() => onClickingEdit()}>Update Recipe</Button>
            <Button variant="outline-danger" onClick={()=> onClickingDelete(recipe.id)}>Delete Recipe</Button>
          </Col>
          {/* <Col>
            <Image src={recipe.img} />
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
// remember to add formatted wait time for posting dates

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
}