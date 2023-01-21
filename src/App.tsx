import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import AnnonceList from "./components/AnnonceList/AnnonceList";
import {Home} from './pages/home/Home'


function App() {
  return (
    <div className="App">
      <div className="annonce-container">
        <Home />

      </div>
        <ToastContainer />
    </div>
  );
}

export default App;
