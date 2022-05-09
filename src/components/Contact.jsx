import React, { useState, useEffect } from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
    
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
        console.log(scrollY * 100 / (maxLimit))
    }
    
            console.log(scrollY)
            console.log(offsetX);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },);

  return (
    <div className='container'>
        <div className='center-ver'>
            <h1 className="parallax-title-contact" style={{transform: `translateX(${-(offsetX) * 20}%)`}}> CONTACT </h1>
            <ul className="social">
                <li className='social-icon'>
                    <a href='https://github.com/R2mik'><FaGithub/></a>
                </li>
                <li className='social-icon'>
                    <a href='https://www.linkedin.com/in/artur-adamik-86798979/'><FaLinkedin/></a>
                </li>
                <li className='social-icon'>
                    <a href='https://www.facebook.com/artur.adamik.1/'><FaFacebook/></a>
                </li>
                <li className='social-icon'>
                    <a href='https://www.instagram.com/king_arrtur/'><FaInstagram/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}
