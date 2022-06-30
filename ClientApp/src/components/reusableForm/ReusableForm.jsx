import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './reusableForm.scss';
import Button from 'react-bootstrap/Button';
import Rating from "@mui/material/Rating";
import Form from 'react-bootstrap/Form';
// import ComboBox from './AutoComplete';
// import ComboBox from './ComboBox';
import MultipleSelectCheckmarks from './MealSelection';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



export default function ReusableForm(props) {
  // const [ value, setValue ] = useState(null);
  const [ ingredientList, setIngredientList ] = useState([
    {ingredients: ""},
  ]);
  console.log(ingredientList)

  const handleIngredientAdd = () => {
    setIngredientList([...ingredientList, {ingredients: ""} ])
  }

  const handleIngredientDelete = (index) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setIngredientList(list);
  }

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target
    const list = [...ingredientList];
    list[index][name] = value;
    setIngredientList(list);
  }

  // const cuisineOriginArray = [
  //   {title: 'American', value: 'American'},
  //   {title: 'Chinese', value: 'Chinese'},
  //   {title: 'Comfort', value: 'Comfort'},
  //   {title: 'French', value: 'French'},
  //   {title: 'Greek', value: 'Greek'},
  //   {title: 'Italian', value: 'Italian'},
  //   {title: 'Indian', value: 'Indian'},
  //   {title: 'Japanese', value: 'Japanese'},
  //   {title: 'Mediterranean', value: 'Mediterranean'},
  //   {title: 'Oriental', value: 'Oriental'},
  //   {title: 'Spanish', value: 'Spanish'},
  //   {title: 'Thai', value: 'Thai'},
  //   {title: 'Other', value: 'Other'},
  // ];

  // const handleAddingFoodOriginClick = (newValues) => {
  //   const updatedValues = [...value].concat(newValues);
  //   setValue(updatedValues);
  //   console.log(value)
  // }


  return (
    <>
      <br/>
      <div className="form-center">
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="title" name="title" placeholder="Enter Recipe Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Meal Type:</Form.Label> */}
          <MultipleSelectCheckmarks type="mealTypes" name="mealTypes" placeholder="Meal Type:"/>
        </Form.Group>
        {/* <ComboBox  
          type="origin" 
          name="origin" 
          value="value" 
          cuisineOrigin={cuisineOriginArray}
          onClick={handleAddingFoodOriginClick}/> */}

        {/* <Form.Group className="mb-3">
          <Form.Label>Ingredients:</Form.Label>
          <Form.Control type="text" name="ingredients" placeholder="What does the recipe call for?" />
        </Form.Group> */}
        <Container>
          <Row>
            <Col>
        <Form.Group>
          <Form.Label>Ingredients:</Form.Label>
          {ingredientList.map((singleIngredient, index) => (
            <div key={index} className='ingredients'>
               <div className='ingredientContain'>
                  <Form.Control type="text" name="ingredients" placeholder="What does the recipe call for?"  required
                    value={singleIngredient.ingredients}
                    onChange={(e) => handleIngredientChange(e, index)}
                  />
                  {ingredientList.length - 1 === index && ingredientList.length < 30 &&
                  // <Button
                  <AddCircleOutlineIcon
                    fontSize="large"
                    className='add-btn' 
                    onClick={handleIngredientAdd} />
                  // </Button>
                  }
                </div>
                <div className='removeBtn'>
                  {ingredientList.length > 1 && 
                  <RemoveIcon fontsize="large" 
                    type="danger" 
                    onClick={() => handleIngredientDelete(index)}
                    className='remove-btn'
                    />
                  }
                </div>
            </div>
          ))}
                  </Form.Group>
          </Col>
          <Col>
                  <h6>Ingredients Added:</h6>
                <div className='ingredientOutput'>
                  {ingredientList.map((singleIngredient, index) => (
                  <ul key={index}>
                      {singleIngredient.ingredients && <li>{singleIngredient.ingredients}</li>}
                  </ul>
                    ))}
                </div>
        </Col>
        </Row>
        </Container>
        <Form.Group className="mb-3">
          <Form.Label>Instructions:</Form.Label>
          <Form.Control as="textarea" rows={3} type="instructions" name="instructions" placeholder="What steps are required?" />
        </Form.Group>
      <Rating 
        name="rating"
        type="rating"
        // value={value} 
        defaultValue={2.5} 
        precision={0.5} 
        size="large"/><br/><br/>
        <Button variant="outline-success" type="submit">{props.buttonText}</Button>
        </Form>
      </div><br/><hr/>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};