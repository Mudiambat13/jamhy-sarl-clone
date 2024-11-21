
import './App.css'
import Contact from './components/contact'
import About from './components/about'
import Home from './components/home'
import Projects from './components/Projects'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='*' element={<h1>Page not found</h1>} />
    </Routes>
  );
};


export default App
