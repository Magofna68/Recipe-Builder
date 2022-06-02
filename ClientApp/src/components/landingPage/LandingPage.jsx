import React from 'react'
// import LandingPagePic from '../../IMAGES/LandingPagePic.jpeg';
import './landingPage.scss';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Container from 'react-bootstrap/Container';

export default function LandingPage(props) {
  return (
    <Container id='landingPage'>
      <div id="lpIcon">
        <CloseIcon fontSize="large" onClick={props.onLandingPageClick} />
      </div>
      <div className='titleContainer'>
        <h1>Beat the Meat.</h1>
      </div>
      <div className="bottomText">
        <h2>Vegan Eats.</h2>
        <h4>Impacting the World, one recipe at a Time.</h4>
      </div>
    </Container>
    
  )
}

LandingPage.propTypes = {
  onLandingPageClick: PropTypes.func,
}
