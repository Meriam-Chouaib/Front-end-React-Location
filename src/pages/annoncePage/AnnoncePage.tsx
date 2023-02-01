import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {IIAnnonce} from "../../interfaces/Annonce";
import {response} from "express";
import {log} from "util";






const AnnoncePage: React.FC <any>= ({annonce}) => {

    const [data, setData] = useState({

    });
    let {id} = useParams();
    useEffect(() => {
        getAnnonce(id)
    //
        //  getAnnonce(id)
    //     //  setAnnonce(getAnnonce(id));
    //
    }, [])

    const getAnnonce = async (id: string | undefined) =>{
        try{

            const res =  await axios.get(`http://localhost:5000/api/annonces/${id}`)
            // setAnnonce(res.data)
setData(res.data)
            console.log("data is "+data)

            console.log(res.data)


        }catch(e){
            console.log(e)
        }
    }

    return (
        <>

            <h1>result data is</h1>

            { id  }

        </>
    );
}

export default AnnoncePage;