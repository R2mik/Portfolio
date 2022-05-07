import React, {useState, useEffect} from 'react'

import { PDetails } from './ProjectDetails'

//import { TestImages } from './ParallaxImages/Test'
import IphoneTestImg from '../../assets/Images/testImg/Home.png'
//import MonitorTestImg from '../../../assets/Images/testImg/monitor.jpg'
import TabletTestImg from '../../assets/Images/testImg/BigBubble.png'

export const ProjectsParallax = () => {
  const [scrollY, setScrollY] = useState(0)
  const [slideNumber, setSlideNumber] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [scrollImg, setScrollImg] = useState(0)

  // const [scrollImg, setScrollImg] = useState(0)
  
  /*   const boxSize = document.querySelector('.text').clientHeight
  */
  const handleScroll = () => {
    setScrollY(window.pageYOffset)

    const NajAboutSize = document.querySelector(".naj").clientHeight + document.querySelector(".container").clientHeight
    const projectHeight = document.querySelector('.project-container').clientHeight
    const maxLimit = NajAboutSize + projectHeight
    const boxSize = (document.querySelector(".project-container").offsetHeight / PDetails.length)

    if (Math.round(scrollY-( document.querySelector(".project-container").offsetHeight)) > 0 ){
      setSlideNumber(PDetails.length-1)
  }
  else if ((Math.round((scrollY-NajAboutSize)) > 0 )){
    setSlideNumber(Math.round((scrollY-NajAboutSize)/(document.querySelector(".project-container").offsetHeight / PDetails.length)))
  } 
  
  if (scrollY > NajAboutSize && scrollY < maxLimit ) {
    setScrollPercent((scrollY - NajAboutSize) * 100 / projectHeight)
    setScrollImg (scrollPercent - ((boxSize * slideNumber * 100 / projectHeight)-(0.5 * boxSize * 100/projectHeight)))
  }

  console.log(scrollImg);
  //console.log(((boxSize * slideNumber * 100 / projectHeight)-(0.5 * boxSize * 100/projectHeight)));
  //console.log((boxSize * slideNumber * 100 / projectHeight));
  //console.log(((boxSize * slideNumber) * 100 / projectHeight))
  //console.log(window.document.documentElement.scrollHeight); //wysokość elemenu?!
  //console.log(projectHeight); //wysokość okna


/*     if ((Math.round((scrollY - NajAboutSize)) > 0 )){
      setScrollImg(scrollY - NajAboutSize)
    } */

    /* 
    let index = 0, length = target.length
    for(index; index < length; index++){
      setScrollMove(scrollY - (NajAboutSize + boxSize * target.index))
    } */

  }
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    });
    
    return (
        <div className="imageBox">
          <div className="image-container">
            <img className='iphone' src={PDetails[slideNumber].imgIphone} style={{transform: `translate(5%, -${scrollImg * 30}%) scale(0.3)`}} alt="Iphone test"></img>
            <img className='tablet' src={PDetails[slideNumber].imgTablet} style={{transform: `translate(30%, -${scrollImg * 20}%) scale(0.3)`}} alt="Tablet test"></img>
          </div>
{/*         <div className='image-container'>
          <img className='iphone' src={IphoneTestImg} style={{transform: `translateY(-${scrollImg * 1.2}%) scale(0.7)`}} alt="Iphone test"></img>
          <img className='tablet' src={TabletTestImg} style={{transform: `translateY(-${scrollImg * 1.5}%) scale(0.6)`}} alt="Tablet test"></img>
        </div> */}
        </div>
      )
}
    