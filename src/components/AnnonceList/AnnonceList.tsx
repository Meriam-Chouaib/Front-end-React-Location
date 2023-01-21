import React, {useEffect, useState} from "react";

import './AnnonceList.scss';

import Annonce from "../annonce/Annonce";
import axios from "axios";
import {toast} from "react-toastify";
import loadingImage from "../../assets/loader.gif";

import {IAnnonce, IIAnnonce} from "../../interfaces/Annonce";

type Props = {
    list: IIAnnonce [];
};


const AnnonceList = (props: Props) => {
    const {list} = props;
    const [showPage, setShownPage] = useState("list");

    const onBackBtnClickHnd = () => {
        setShownPage("add an annonce")
    }
    const [formData, setFormData] = useState({
        "_id": "222222222222",
        "region": "Wardanin",
        "description": "Descriptiooonn",
        "nbPiece": 2,
        "price": 500,
        "pictures": "dkdkdkkdkd.jpg"
    })
    const initialData: IIAnnonce[] = [
        {
            "_id": "222222222222",
            "region": "Wardanin",
            "description": "Descriptiooonn",
            "nbPiece": 2,
            "price": 500,
            "pictures": "dkdkdkkdkd.jpg"
        }
    ]
    const isEdit:Boolean = false;

    const [annonces, setAnnonces] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);

    const getAnnonces = async () => {
        setIsLoading(true);
        try {
            const {data} = await axios.get(`http://localhost:5000/api/annonces`)
            setAnnonces(data);
            setIsLoading(false);
        } catch (e: any) {
            toast.error(e.message);
            console.log(e)
            setIsLoading(false);
        }
    }
    const deleteAnnonce = async (id: String) => {
        try {
            await axios.delete(`http://localhost:5000/api/annonces/${id}`);
            getAnnonces();
        } catch (e) {
            console.log(e)
        }
    }
    const getSingleAnnonce = async (id:String) => {
        try {
           const annonce = await axios.get(`http://localhost:5000/api/annonces/${id}`);
            console.log(annonce)
            getAnnonces();

        } catch (e) {
            console.log(e)
        }
    }
    const onAddAnnonceClick = () => {
        setShownPage("add an annonce")
    }
    const onEditAnnonceClick = () => {
        setShownPage("edit an annonce")
    }

    useEffect(() => {
        getAnnonces();
    }, [])

    return (

        <div className="container-list-annonces">
            <input type="button" value="create annonce" onClick={onAddAnnonceClick}/>
            <input type="button" value="edit annonce" onClick={onEditAnnonceClick}/>

            {/*<input type="button" value="create annonce"/>*/}
            <h2 className="title-list-of-annonces">List of annonces</h2>
            {/*{ showPage === "add an annonce" && <AnnonceForm onBackBtnClickHnd={onBackBtnClickHnd}  />}*/}

            {
                isLoading && (
                    <div className="loading --flex-center">
                        <img src={loadingImage} alt="Loadind"/>
                    </div>
                )}
            <div className="list-annonces">


                {!isLoading && annonces.length === 0 ? (
                    <p>No annonce found!</p>
                ) : (


                    annonces.map((annonce, index) => {
                        // console.log(annonce._id)

                        return (
                            <div className="annonce">
                                <button className="btn-delete" onClick={() => deleteAnnonce(annonce._id)}>×</button>
                                <input type="button" value="edit" onClick={()=> getSingleAnnonce(annonce._id) }/>

                                <Annonce key={annonce._id} annonce={annonce} index={index}/>


                            </div>


                        )
                    })

                )}
            </div>

        </div>

    )
}

export default AnnonceList