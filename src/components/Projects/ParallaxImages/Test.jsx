import React from 'react'

import IphoneTestImg from '../../../assets/Images/testImg/Home.png'
//import MonitorTestImg from '../../../assets/Images/testImg/monitor.jpg'
import TabletTestImg from '../../../assets/Images/testImg/BigBubble.png'

import styled from 'styled-components'

const Iphone = styled.img
`
transform: translateY(${props => -(props.scroll * 2)}%);
transition: transform 0.2s ease-out;
position: absolute;
bottom:-50vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Tablet = styled.img
`
transform: translateY(${props => -(props.scroll * 5)}%);
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
right:0vw;
/* border: 1px dashed red; */
height: 50vh; 
filter: blur(0.6px);
`;

export const TestImages = (props) => {

/*     const heightToBeReducedInVH = ((boxHeight * index) - 100)
    const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1
    scrollPercent -= scrollOffsetInPercent */
    return (
    <React.Fragment>
      <img className='iphone' src={IphoneTestImg} style={{transform: `translateY(-${scrollY * 1.05}px) scale(0.7)`}} alt="Iphone test"></img>
      <img className='tablet' src={TabletTestImg} style={{transform: `translateY(-${scrollY * 1.5}px) scale(0.6)`}} alt="Tablet test"></img>
    </React.Fragment>
  )
}
