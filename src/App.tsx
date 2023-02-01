import './App.scss';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import AnnonceList from "./components/AnnonceList/AnnonceList";
import {Home} from './pages/home/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PATHS} from "./core/enums/paths";
import AnnonceForm from "./components/annonceForm/AnnonceForm";
import LoginForm from "./pages/loginPage/LoginPage";
import RegisterForm from "./components/registerForm/RegisterForm";
// import Footer from "../../components/footer/Footer";
import Header from "./components/header/Header";
import AnnoncePage from "./pages/annoncePage/AnnoncePage";
import annonce from "./components/annonce/Annonce";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

      <div className="">

          <BrowserRouter>
              <Routes>
                  <Route path={PATHS.HOME} element={<Home/>}/>


                  /****Annonce***/
                  <Route path={PATHS.ANNONCE.EDIT} element={<AnnonceForm isEdit={true}/>}/>
                  <Route path={PATHS.ANNONCE.CREATE} element={<AnnonceForm isEdit={false}/>}/>
                  <Route path={PATHS.ANNONCE.GET} element={<AnnoncePage  />}/>




                  /****User****/
                  <Route path={PATHS.LOGIN} element={<LoginForm/>}/>
                  <Route path={PATHS.REGISTER} element={<RegisterForm/>}/>
                  {/*<Route path={PATHS.} element={} />*/}


              </Routes>
          </BrowserRouter>


      </div>
        <ToastContainer />
    </div>
  );
}

export default App;
