import React from 'react'
// import LandingPagePic from '../../IMAGES/LandingPagePic.jpeg';
import './landingPage.scss';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Container from 'react-bootstrap/Container';

export default function LandingPage(props) {
  return (
    <Container id='landingPage'>
        <CloseIcon fontSize="large" onClick={props.onLandingPageClick} />
      <div className='titleContainer'>
        <h1>Beat the Meat</h1>
        <h2>Eat Vegan.</h2>
        <h4>Check out these Vegan Recipe's</h4>
      </div>
    </Container>
    
  )
}

LandingPage.propTypes = {
  onLandingPageClick: PropTypes.func,
}
