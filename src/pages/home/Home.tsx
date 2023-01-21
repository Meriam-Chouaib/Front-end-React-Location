import './Home.scss'
import React, {useEffect, useState} from "react";
import { IIAnnonce} from '../../interfaces/Annonce';
import AnnonceList from "../../components/AnnonceList/AnnonceList";
import AnnonceForm from "../../components/annonceForm/AnnonceForm";
import axios from "axios/index";
import {toast} from "react-toastify";

export const Home = () => {

    const [annonces, setAnnonces] = useState([] as IIAnnonce [])
    const [showPage, setShownPage] = useState("list");

    const createAnnonce = (data: IIAnnonce) =>{
        setAnnonces([...annonces, data]);
    }
    const shownListPage = () => {
        setShownPage("List annonces")
    }
    const onAddAnnonceClick = () => {
        setShownPage("add an annonce")
    }

    return (
        <>
            <h2>Crud Annonce</h2>
            <div className="list-annonces">
                {showPage === "list" && (
                    <>
                        <input type="button" value="create annonce" onClick={onAddAnnonceClick}/>
                        <AnnonceList list={annonces}/>
                    </>
                )}


                {showPage === "add an annonce" && <AnnonceForm onBackBtnClickHnd={shownListPage} onSubmitAnnonce={createAnnonce}/>}

            </div>
        </>
    )
}