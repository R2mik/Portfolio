import React from 'react'
import { ProjectTextContent } from './Projects/ProjectTextContent'
import { ProjectsParallax } from './Projects/ProjectsParallax'

export const Projects = () => {

  return (
    <div className='project-container'>
      <ProjectTextContent/>
      <ProjectsParallax/>
    </div>
  )
}
