import React from 'react';
import { projects } from './Data/data';
import Card from './layout/Card';



const Projects = () => {

  
  return (
    <div className='projects' id='projects'>
      <div className="pj-box">
        <h1>Projects</h1>
        <div className="pj-content">
          {projects.map((p)=>{
            return(
              <Card
                key={p.id}
                description = {p.description}
                name = {p.name}
                used = {p.used}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects