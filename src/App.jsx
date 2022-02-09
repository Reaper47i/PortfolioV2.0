import {Home,About,Skills,Contact,Projects} from './components/index';

import './App.css'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="wrapper">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
