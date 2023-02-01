import React, {ChangeEvent, useState} from "react";
import './EditAnnonceForm.scss'
import {IAnnonce, IEditAnnonceProps, IIAnnonce} from "../../interfaces/Annonce";
import axios from "axios";
import Input from "../input/Input";


const EditAnnonceForm: React.FC<IEditAnnonceProps> = ({onBackBtnClickHnd, onSubmitAnnonce, annonce}) => {

    const [annonceEdit, setAnnonceEdit] = useState<IAnnonce>({
        region: annonce.region,
        description: annonce.description,
        nbPiece: annonce.nbPiece,
        price: annonce.price,
        pictures: annonce.pictures
    });

    /*************************************** update annonce ************************************/

    const onSubmiAnnonce = async (data: IIAnnonce, id: string) => {
        try {
            await axios.patch(`http://localhost:5000/api/annonces/${id}`, data);
            console.log(`annonce updated${id}`)

        } catch (e) {
            console.log(e)
        }
        console.log("i'am here!", data)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>, attributName: any): void => {
        setAnnonceEdit((prevState) => ({
            ...prevState,
            attributName: e.target.value
        }))
    }

    return (
        <div className="container-form">
            <form className="annonce-form">

                <Input value={annonce.region}
                       onChange={(e) => {handleChange(e, "region")}}
                       type={"text"} placeholder={"region"} name={"region"}/>
                <Input value={annonce.description}
                       onChange={(e) => {handleChange(e, "description")}}
                       type={"text"} placeholder={"description"} name={"description"}/>
                <Input value={annonce.nbPiece}
                       onChange={(e) => {handleChange(e, "nbPiece")}}
                       type={"text"} placeholder={"nbPiece"} name={"nbPiece"}/>
                <Input value={annonce.price} onChange={(e) => {handleChange(e, "price")}}
                       type={"text"} placeholder={"price"} name={"price"}/>
                <Input value={annonce.pictures} onChange={(e) => {handleChange(e, "pictures")}}
                       type={"text"} placeholder={"pictures"} name={"pictures"}/>

                <button type="submit" onClick={() => onSubmiAnnonce(annonce, annonce._id)}>Edit Annonce</button>
                <button type="submit" onClick={onBackBtnClickHnd}>back</button>


            </form>
        </div>


    );
};

export default EditAnnonceForm

