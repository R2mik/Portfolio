import React, { useState, useEffect } from 'react'

export const Skills = () => {
    
    const [offsetX, setOffsetX ] = useState(0)
    const [scrollY, setScrollY ] = useState(0)
    
    const handleScroll = () => {
        setScrollY(window.pageYOffset)

        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        const NajAboutSize = document.querySelector(".naj").clientHeight + document.querySelector(".container").clientHeight
        const projectHeight = document.querySelector('.project-container').clientHeight
        const maxLimit = NajAboutSize + projectHeight

        if (maxLimit - vh < scrollY) {
            setOffsetX((scrollY - maxLimit) * 100 / (maxLimit))
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },);

  return (
    <div className='container'>
        <h1 className="parallax-title-skills" style={{transform: `translateX(${-(offsetX) * 20}%)`}}> SKILLS </h1>
        <div className="skills">
            <div className="column">
                • React
                <br />
                • React Native (in progress)
                <br />
                • JavaScript
                <br />
                • CSS/SASS/Styled Componenet 
                <br />
                • Responsive Design
            </div>

            <div className="column">
                • Rapid Prototyping
                <br />
                • Functional Programming
                <br />
                • Interaction Development
                <br />
            </div>
        </div>
    </div>
  )
}
