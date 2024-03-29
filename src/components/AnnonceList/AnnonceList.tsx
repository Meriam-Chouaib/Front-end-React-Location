import React, {useEffect, useState} from "react";
import './AnnonceList.scss';
import Annonce from "../annonce/Annonce";
import axios from "axios";
import {toast} from "react-toastify";
import loadingImage from "../../assets/loader.gif";
import {IAnnonce, IAnnonceListProps, IIAnnonce} from "../../interfaces/Annonce";


const AnnonceList: React.FC<IAnnonceListProps> = ({list}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [showPage, setShownPage] = useState("list");
    const [annonces, setAnnonces] = useState<IIAnnonce[]>([{
        _id: "",
        region: "",
        description: "",
        nbPiece: 0,
        price: 0,
        pictures: []
    }]);



    const onBackBtnClickHnd = () => {
        setShownPage("add an annonce")
    }

    /*************************************** get all annonces ************************************/

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

    /*************************************** get single annonce ************************************/

    const getSingleAnnonce = async (id: String) => {
        try {
            const annonce = await axios.get(`http://localhost:5000/api/annonces/${id}`);
            console.log(annonce)
        } catch (e) {
            console.log(e)
        }
    }

    /*************************************** update annonce ************************************/
    const handleUpdate = async (data: IAnnonce, id: string) => {
        try {
            await axios.patch(`http://localhost:5000/api/annonces/${id}`, data);

        } catch (e) {
            console.log(e)
        }
    }

    /*************************************** delete annonce ************************************/
    const handleRemove = async (annonce: IAnnonce, id: string) => {
        try {
            await axios.delete(`http://localhost:5000/api/annonces/${id}`);
            getAnnonces();
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAnnonces();
    }, [])

    return (
        <>
            <div className="container-list-annonces">
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
                                    <Annonce annonce={annonce} annonceIndex={index} onUpdate={handleUpdate}
                                             onRemove={handleRemove} onGetAnnonce={getSingleAnnonce}/>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}
export default AnnonceList