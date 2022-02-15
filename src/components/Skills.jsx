import React from 'react'

const languages = [
  'JavaScript',
  'HTML/CSS',
  'Python',
  'Java'
]
const frameworks = [
  'React.Js',
  'Vue.Js'
]
const tools = [
  'Redux',
  'Taiwind CSS',
  'Figma',
  'Postman',
  'MongoDB'
]

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className="sk-box">
        <div className="Skcontent">
            <div className='sk-h'><h3>Below are some my skills and technologies I have worked on</h3></div>
            <span className='line3 sp'></span>
            <div> <h3>Languages</h3> {languages.map((items)=> <div key={items}>{items}</div>)} </div>
            <div> <h3>Frameworks</h3> {frameworks.map((f)=> <div key={f}>{f}</div>)} </div>
            <div> <h3>Other Technologies</h3> {tools.map((t)=> <div key={t}>{t}</div>)} </div>
        </div>
      </div>
      <div className="wave3"></div>
    </div>
  )
}

export default Skills


