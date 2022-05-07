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
            <img className='iphone' src={PDetails[slideNumber].imgIphone} style={{transform: `translate(5%, -${scrollImg * 30}%) scale(0.3)`}} alt="Iphone test"></img>
            <img className='tablet' src={PDetails[slideNumber].imgTablet} style={{transform: `translate(30%, -${scrollImg * 20}%) scale(0.3)`}} alt="Tablet test"></img>
          </div>
        </div>
      )
}
    