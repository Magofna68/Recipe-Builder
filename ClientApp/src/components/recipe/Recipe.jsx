import React from 'react'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './recipe.scss';
import StarIcon from '@mui/icons-material/Star';

export default function Recipe(props) {
  return (
    <>
      <Card 
        style={{ 
          width: '17rem',
          margin: 'auto',
          marginBottom: '10px',
        }} 
        className="text-center" 
        onClick={() => props.whenRecipeClicked(props.id)}
      >
        <Card.Header>{props.origin} {props.mealType}</Card.Header>
        <Card.Img variant="top" src={props.img}/>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Title>{props.ingredients}</Card.Title> */}
        {/* <Card.Subtitle>{props.origin}</Card.Subtitle> */}
        <footer className="blockquote-footer">
        {props.quote}
        </footer>
        {/* <Card.Text>{props.instructions}</Card.Text> */}
        <Card.Footer muted>
          {props.rating}
          <StarIcon />
          </Card.Footer>
      </Card>
    </>
  );
}

// will need to update ingredients prop type to match array of numerous
// ingredients and measurements being added to recipe
Recipe.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.string,
  origin: PropTypes.string,
  mealType: PropTypes.string,
  rating: PropTypes.string,
  whenRecipeClicked: PropTypes.func,
}
