import React from 'react'
import styled from 'styled-components'
import imageSlider from './images/slider-bg.jpg'


function Section() {
  return (
      <Wrap>
     
    </Wrap>
  )
}

const Wrap = styled.div`
width: 100vw;
display: flex;
justify-content:center;
height: 90vh;
background-size:cover;
overflow: hidden;
background-image: url(${imageSlider});
background-size: cover;

/* background-color:red; */



`



export default Section;

