import React, {useState, useEffect} from 'react'

import { PDetails } from './ProjectDetails'

export const ProjectsParallax = () => {
  const [scrollY, setScrollY] = useState(0)
  const [slideNumber, setSlideNumber] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [scrollImg, setScrollImg] = useState(0)

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
  }
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    });
    
    return (
        <div className="imageBox">
          <div className="image-container">
          <img className='monitor m1' src={PDetails[slideNumber].imgMonitor1} style={{transform: `translate(3vw, -${scrollImg * 8}%) scale(0.5)`}} alt="Tablet img 1"></img>
          <img className='monitor m2' src={PDetails[slideNumber].imgMonitor2} style={{transform: `translate(5%, -${scrollImg * 5}%) scale(0.3)`}} alt="Tablet img 2"></img>
          <img className='monitor m3' src={PDetails[slideNumber].imgMonitor3} style={{transform: `translate(7%, -${scrollImg * 7}%) scale(0.3)`}} alt="Tablet img 3"></img>
          <img className='tablet t1' src={PDetails[slideNumber].imgTablet1} style={{transform: `translate(-10%, -${scrollImg * 20}%) scale(0.3)`}} alt="Tablet img 1"></img>
          <img className='tablet t2' src={PDetails[slideNumber].imgTablet2} style={{transform: `translate(30%, -${scrollImg * 20}%) scale(0.3)`}} alt="Tablet img 2"></img>
          <img className='tablet t3' src={PDetails[slideNumber].imgTablet3} style={{transform: `translate(0%, -${scrollImg * 20}%) scale(0.3)`}} alt="Tablet img 3"></img>
          <img className='iphone i1' src={PDetails[slideNumber].imgIphone1} style={{transform: `translate(-10%, -${scrollImg * 30}%) scale(0.3)`}} alt="Iphone img 1"></img>
          <img className='iphone i2' src={PDetails[slideNumber].imgIphone2} style={{transform: `translate(30%, -${scrollImg * 30}%) scale(0.3)`}} alt="Iphone img 2"></img>
          <img className='iphone i3' src={PDetails[slideNumber].imgIphone3} style={{transform: `translate(80%, -${scrollImg * 30}%) scale(0.3)`}} alt="Iphone img 3"></img>
          </div>
        </div>
      )
}
    