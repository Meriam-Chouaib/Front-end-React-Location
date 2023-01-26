import React, {ChangeEvent, useEffect, useState} from "react";
import './AnnonceForm.scss'
import {IAnnonce, IAnnonceFormProps, IIAnnonce} from "../../interfaces/Annonce";
import axios from "axios";
import {createRoutesFromChildren, useLocation, useNavigate, useParams} from "react-router-dom";
import Input from "../input/Input";
import editAnnonceForm from "../editAnnonceForm/EditAnnonceForm";
import {PATHS} from "../../core/enums/paths";


const AnnonceForm: React.FC<IAnnonceFormProps> = ({onBackBtnClickHnd, onSubmitAnnonce, isEdit}) => {
    const [initalState, setInitalState] = useState<IAnnonce>({
        region: "",
        description: "",
        nbPiece: 0,
        price: 0,
        pictures: ""
    })
    const [annonce, setAnnonce] = useState<IAnnonce>(initalState);
    let {id} = useParams();

    const getAnnonceById = async (id: string| undefined ) => {
        try {
            const annonceBy = await axios.get(
                `http://localhost:5000/api/annonces/${id}`,
            )
            setAnnonce(annonceBy.data)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAnnonceById(id);
    }, [])

    const onSubmitbtnAnnonce = async (e: any) => {
        e.preventDefault()
        const data: IAnnonce
            = {
            region: annonce.region,
            description: annonce.description,
            nbPiece: annonce.nbPiece,
            price: annonce.price,
            pictures: annonce.pictures
        }
        try {
            await axios.post(
                `http://localhost:5000/api/annonces/create`,
                data,
            )
            backToList()
            console.log("annonce added successfully!")
            console.log(data)

            //onSubmitAnnonce(data)
        } catch (e) {
            console.log(e)
        }
    }


    const handleUpdate = async(e:any,data:IAnnonce,id:string|undefined) =>{
        e.preventDefault()
        try{
            await axios.patch(`http://localhost:5000/api/annonces/${id}`,data);

        }catch (e) {
            console.log(e)
        }
        backToList()
    }
    const navigate = useNavigate();
    const handleChange = (e: any): void => {
        setAnnonce((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    const backToList = () => {
 window.location.replace("/")

    }
    return (
        <div className="container-form">
            {isEdit && <h1>Edit an Annonce </h1>}
            {!isEdit && <h1>Create an Annonce </h1>}
            <form className="annonce-form" onSubmit={onSubmitbtnAnnonce}>

                <Input name={"region"} onChange={(e) => handleChange(e)}
                       placeholder={"region"} type={"text"}
                       value={annonce.region}/>

                <Input name={"description"} onChange={(e) => handleChange(e)} placeholder={"description"} type={"text"}
                       value={annonce.description}/>
                <Input name={"nbPiece"} onChange={(e) => handleChange(e)} placeholder={"Number of rooms"} type={"text"}
                       value={annonce.nbPiece}/>

                <Input name={"price"}
                       onChange={(e) => handleChange(e)} placeholder={"price"} type={"text"} value={annonce.price}/>
                <Input name={"pictures"} onChange={(e) => handleChange(e)} placeholder={"pictures"} type={"text"}
                       value={annonce.pictures}/>

                {!isEdit && <button type="submit" onClick={onSubmitbtnAnnonce}>Add Annonce</button>}

                { isEdit && id!=undefined  && <button type="submit" onClick={(e)=>handleUpdate(e,annonce,id)}>Edit Annonce</button>}

                <button type="submit" onClick={backToList}>back to list</button>



            </form>
        </div>
    );
};

export default AnnonceForm

