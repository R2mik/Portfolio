import React, { useState, useEffect } from 'react'

export const AboutMe = () => {
    
    const [offsetX, setOffsetX ] = useState(0)
    
    const handleScroll = (event) => {
        const {body, documentElement} = event.target;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop)
        const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100)
        const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight
        if (sp >= 0 && sp <= maxlimit) {
            setOffsetX(sp)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

  return (
    <div className='container'>
        <div className='center-ver'>
            <h1 className="parallax-title" style={{transform: `translateX(${(offsetX) * 5}%)`}}>
                ABOUT ME</h1>
            <p className='aboutDescription'>Front-end developer who cares deeply about user experience.
        Serious passion for UI design and new technologies.</p>
        </div>
    </div>
  )
}
