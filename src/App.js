import React from 'react';
import './index.css'
import Home from './routes/home';
import About from './routes/About';
import Project from './routes/project';
import Contact from './routes/Contact';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    
<>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='about/' element={<About/>}/>
  <Route path='contact/' element={<Contact/>}/>
  </Routes>
</>
  );
}

export default App;
