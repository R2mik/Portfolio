import React, { useState, useEffect } from 'react'

import { StaggerTextChange } from 'stagger-text-reveal-animation'

import { PDetails } from './ProjectDetails'

export const ProjectTextContent = () => {
    const [scrollY, setScrollY] = useState(0)
    const [slideNumber, setSlideNumber] = useState(0)
    

    const handleYScroll = () => {
        setScrollY(window.pageYOffset)

        const NajAboutSize = document.querySelector(".naj").clientHeight + document.querySelector(".container").clientHeight

        if (Math.round(scrollY-( document.querySelector(".project-container").offsetHeight)) > 0 ){
            setSlideNumber(PDetails.length-1)
        }
        else if ((Math.round((scrollY-NajAboutSize)) > 0 )){
            setSlideNumber(Math.round((scrollY-NajAboutSize)/(document.querySelector(".project-container").offsetHeight / PDetails.length)))
        } 
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleYScroll);
        return () => window.removeEventListener("scroll", handleYScroll)
    });

  return (
    <div className='text'>
      <div className="text-id">{PDetails[slideNumber].number}</div>
      <div className="text-details-container">
        <a className="text-details" href={PDetails[slideNumber].page} target='_blank'>
          <div className="text-details-name">{PDetails[slideNumber].projectName}</div>
          <div className="text-details-technologies">{PDetails[slideNumber].technologies.map((tech, index, arr) => (index === arr.length - 1 ? (
              <span key={tech}>
                {tech}
              </span>
            ) : (
              <span key={tech}>
                {tech}
                &nbsp; • &nbsp;
              </span>
            )
            ))}
          </div>
          <div className="text-details-descriptions">{PDetails[slideNumber].projectDesc}</div>
        </a>
      </div>
      <div className="text-type">{PDetails[slideNumber].projectType}</div>
    </div>
  )
}
