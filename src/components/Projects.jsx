import React from 'react'

const projects = [
  {
    id : '1',
    name:'Github Finder',
    description:'Github Finder App that uses Github API to find first 300 profile names and info.'
  },
  {
    id:'2'
  }
]

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className="pj-box">
        <h1>Projects</h1>
        <div className="pj-content">
          
        </div>
      </div>
    </div>
  )
}

export default Projects