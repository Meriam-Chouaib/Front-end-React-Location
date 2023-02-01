import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


const AnnoncePage: React.FC<any> = ({annonce}) => {

    const [item, setItem] = useState({
        _id: "",
        region: "ll",
        description: "",
        nbPiece: 0,
        price: 0,
        pictures: []
    });

    let {id} = useParams();
    useEffect(() => {
        getAnnonce(id)

    }, [])

    const getAnnonce = async (id: string | undefined) => {

        try {

            const res = await axios.get(`http://localhost:5000/api/annonces/${id}`)
            console.log(res.data)
            setItem(res.data)
            // setItem({
            //     _id: res.data._id,
            //     description: res.data.description,
            //     nbPiece: res.data.nbPiece,
            //     price: res.data.price,
            //     pictures: res.data.pictures,
            //     region: res.data.region
            // })
            console.log("data is " + item)

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>result data is </h1> {item}
          <h1> id is </h1>  {id}

        </>
    );
}

export default AnnoncePage;