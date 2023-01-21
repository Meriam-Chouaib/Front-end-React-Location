import React, {useState} from "react";
import './AnnonceForm.scss'
import {IAnnonce, IIAnnonce} from "../../interfaces/Annonce";
import axios from "axios";

type Props = {
    onBackBtnClickHnd : () => void;
    onSubmitAnnonce: (data: IIAnnonce ) => void;
};


const AnnonceForm = (props:Props) => {
    const {onBackBtnClickHnd,onSubmitAnnonce} = props


    const [region, setRegion] = useState("");

    const [description, setDescription] = useState("");

    const [nbPiece, setNbPiece] = useState(0);
    const [price, setPrice] = useState(0);
    const [pictures, setPictures] = useState("");


    const onSubmitbtnAnnonce = async (e:any) => {
        e.preventDefault()
       const data: IIAnnonce
           = {
            _id:"aaaaaaaaaaaa",
           region:region,
           description:description,
           nbPiece: nbPiece,
           price:price,
           pictures:pictures
       }

       try{
           await axios.post(
               `http://localhost:5000/api/annonces/create`,
               data,
           )
           console.log("annonce added successfully!")
           console.log(data)
           onSubmitAnnonce(data)
       }catch (e) {
           console.log(e)
       }



    }
    const editAnnonce = async(id:String,data:IAnnonce) =>{
        try{
            await axios.patch(`http://localhost:5000/api/annonces/${id}`,data);

        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="container-form">
            <form className="annonce-form" onSubmit={onSubmitbtnAnnonce}>


                <input type="text" placeholder="region" name="region"
                       value={region} onChange={(e) => setRegion(e.target.value)}
                       required
                />
                <input type="text" placeholder="description" name="description"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                />
                <input type="text" placeholder="nbPiece" name="nbPiece"
                       value={nbPiece}
                       onChange={(e) => setNbPiece(parseInt(e.target.value))}
                />
                <input type="text" placeholder="price" name="price"
                       value={price} onChange={(e) => setPrice(parseInt(e.target.value))}
                />
                <input type="file" placeholder="pictures" name="pictures"
                       value={pictures} onChange={(e) => setPictures(e.target.value)}
                />
                <button type="submit">Add Annonce</button>

                <button type="submit" onClick={onBackBtnClickHnd}>back</button>

                {/*<button onClick={()=>editAnnonce(_id,data)}>edit</button>*/}

            </form>
        </div>


    );
};

export default AnnonceForm