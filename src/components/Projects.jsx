import React from 'react'
import { ProjectTextContent } from './Projects/ProjectTextContent'
import { ProjectsParallax } from './Projects/ProjectsParallax'
import { PDetails } from './Projects/ProjectDetails'

export const Projects = () => {

/*   const projectsBox = document.querySelector('.text').clientHeight * (PDetails.lenght - 1) */

  return (
    <div className='project-container' /* style={{height: `${projectsBox}px`}} */>
      <ProjectTextContent/>
      <ProjectsParallax/>
    </div>
  )
}
