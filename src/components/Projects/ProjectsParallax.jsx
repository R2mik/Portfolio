import React, {useState, useEffect} from 'react'

import { PDetails } from './ProjectDetails'

const randomArr = Array.from({length: 9}, () => Math.floor(Math.random()*51+80))
console.log(randomArr);

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
          <img className='monitor m1' src={PDetails[slideNumber].imgMonitor1} style={{transform: `translate(0vw, -${scrollImg * 8}%) scale(0.5)`, bottom: '-110vh'}} alt="Monitor img 1"></img>
          <img className='monitor m2' src={PDetails[slideNumber].imgMonitor2} style={{transform: `translate(5vw, -20vw-${scrollImg * 5}%) scale(0.4)`, bottom: '-123vh'}} alt="Monitor img 2"></img>
          <img className='monitor m3' src={PDetails[slideNumber].imgMonitor3} style={{transform: `translate(7vw, -5vw-${scrollImg * 7}%) scale(0.43)`, bottom: '-148vh'}} alt="Monitor img 3"></img>
          <img className='tablet t1' src={PDetails[slideNumber].imgTablet1} style={{transform: `translate(-10vw, -${scrollImg * 30}%) scale(0.5)`, bottom: '-120vh'}} alt="Tablet img 1"></img>
          <img className='tablet t2' src={PDetails[slideNumber].imgTablet2} style={{transform: `translate(7vw, -${scrollImg * 39}%) scale(0.4)`, bottom: '-147vh'}} alt="Tablet img 2"></img>
          <img className='tablet t3' src={PDetails[slideNumber].imgTablet3} style={{transform: `translate(0vw, -${scrollImg * 31}%) scale(0.35)`, bottom: '-104vh'}} alt="Tablet img 3"></img>
          <img className='iphone i1' src={PDetails[slideNumber].imgIphone1} style={{transform: `translate(10vw, -${scrollImg * 37}%) scale(0.5)`, bottom: '-113vh'}} alt="Iphone img 1"></img>
          <img className='iphone i2' src={PDetails[slideNumber].imgIphone2} style={{transform: `translate(-15vw, -${scrollImg * 33}%) scale(0.4)`, bottom: '-127vh'}} alt="Iphone img 2"></img>
          <img className='iphone i3' src={PDetails[slideNumber].imgIphone3} style={{transform: `translate(3vw, -${scrollImg * 13}%) scale(0.35)`, bottom: '-117vh'}} alt="Iphone img 3"></img>
          </div>
        </div>
      )
}
    