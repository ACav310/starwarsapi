import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import SearchForm from './components/searchForm';
import Results from './components/results';
import PlanetResults from './components/planet';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';

function App() {

  const [form, setForm] = useState({});

  const handler = input => {
    setForm(input)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex gapboxone'>
          <img src='/melfalc.png' className='smlogo' alt="" />
          <img className='logo' src='/swlogo.png' alt="" />
          <img src="/fighter.webp" className='smlogoone' alt="" />
        </div>
        <div className='d-flex gapbox'>
          <div>
          <img src="/redsaber.png" className="redsaber" alt="" />
          </div>

          <div className="w-75 forcebox">
            <h1 className='force'>MAY THE FORCE BE WITH YOU...</h1>
            <div className='d-flex justify-content-center  w-100 p-5 gapbox'>
              <div className='p-2 blue-border'>
                <SearchForm handler={handler}/>
              </div>
              <div className='p-3'>
                <img src='/starw.gif' className="App-logo" alt="logo" />
              </div>
              <div className='p-2 red-border'>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/people" element={<Results resultData={form}/>} />
                  <Route path="/planets" element={<PlanetResults resultData={form}/>} />
                </Routes>
              </div>
            </div>
          </div>

          <div>
          <img src="/bluesaber.png" className="saber" alt="" />
          </div>
        </div>

      </header>
      <img src='/hellothere.gif' className='w-100' alt="Hello There" />
      <div className='ref'>All info pulled from <a className='yellowapi' href="https://swapi.dev/">https://swapi.dev/</a></div>
    </div>
  );
}

export default App;
