import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

import Footer from './components/Footer';
import Header from './components/Header';
import ClassCompEG from './components/classComponents/ClassCompEG';
import Home from './components/FunctionalComponents/Home';
import Comone from './components/FunctionalComponents/Comone';
import Comtwo from './components/FunctionalComponents/Comtwo';
import Comthree from './components/FunctionalComponents/Comthree';
import Comfour from './components/FunctionalComponents/Comfour';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Card />
      <Header/>
      <Footer />
      <ClassCompEG/>
      <Comone/>
      <Comtwo/>
      <Comthree/>
      <Comfour/>
    </div>
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;



// import About from "./components/FunctionalComponents/About";
// import ClassCompEG from "./components/ClassComponents/ClassCompEG";


// function App(){

// }
//  import About from "day7_mrg_task\src\componenets\functionalComponents\About.jsx";
//  import Home from "day7_mrg_task\src\componenets\functionalComponents\Home.jsx";
// function App(){
//   return(
//     <div>
//       <h2>Hello one </h2>
//     </div>
    
//     // <section>
//     //   <Home />
//     //   <About />
//     // </section>
//   );
// }
// export default App;