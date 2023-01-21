import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import AnnonceList from "./components/AnnonceList/AnnonceList";
import {Home} from './pages/home/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATHS} from "./core/enums/paths";
import AnnonceForm from "./components/annonceForm/AnnonceForm";


function App() {
  return (
    <div className="App">

      <div className="annonce-container">
          <BrowserRouter>
              <Routes>
                  <Route path={PATHS.HOME} element={<Home/>}/>
                  {/*<Route path={PATHS.} element={} />*/}


              </Routes>
          </BrowserRouter>
        <Home />

      </div>
        <ToastContainer />
    </div>
  );
}

export default App;
