import {Home,About,Skills,Contact,Projects} from './components/index';

import './App.css'
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import { useState } from 'react';

function App() {
  const [open,setOpen] = useState(false);
  return (
    <div className="App">
      <Navbar open={open} setOpen = {setOpen}/>
      <Sidebar open={open}/>
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
