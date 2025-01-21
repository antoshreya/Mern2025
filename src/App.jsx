// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css'
// import About from './components/FunctionalComponents/About';
// import Gallery from './components/FunctionalComponents/Gallery';
// import Home from './components/FunctionalComponents/Home';
// import Contact from './components/FunctionalComponents/Contact';
// import Navbar from './components/FunctionalComponents/Navbar';
// import Signup from './components/FunctionalComponents/Signup';
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <BrowserRouter>
//     <Navbar/>
//       <Routes>
//       <Route path="/"element={<Home />}></Route>
//       <Route path="/about"element={<About />}></Route>
//       <Route path="/gallery"element={<Gallery page="Gallery" image="SECE Logo" />}></Route>
//       <Route path="/contact"element={<Contact />}></Route>
//       <Route path="/signup"element={<Signup />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/FunctionalComponents/About';
import ClassCompEG from './components/classComponents/ClassCompEG';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
       <Home/>
      <About/>
      <h2>Without Props</h2>
      <Gallery/>
      <h2>With Props</h2>
      <Gallery image="SECE Logo" page="Gallery"/>
      <ClassCompEG/>
      <Contact/>
    </div> 
    </>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/"element={<Home />}></Route>
      <Route path="/about"element={<About />}></Route>
      <Route path="/gallery"element={<Gallery page="Gallery" image="SECE Logo" />}></Route>
      <Route path="/contact"element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export deafult App;