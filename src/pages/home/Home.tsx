import './Home.scss'
import React, {useEffect, useState} from "react";
import { IIAnnonce} from '../../interfaces/Annonce';
import AnnonceList from "../../components/AnnonceList/AnnonceList";
import AnnonceForm from "../../components/annonceForm/AnnonceForm";
import axios from "axios/index";
import {toast} from "react-toastify";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {PlusCircleOutlined} from "@ant-design/icons";


export const Home:React.FC = () => {

    const [annonces, setAnnonces] = useState<IIAnnonce[]>(  [] )
    const [showPage, setShownPage] = useState("list");
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const createAnnonce = (data: IIAnnonce ) =>{
        setAnnonces([...annonces, data]);
    }
    const editAnnonce = (data: IIAnnonce) =>{
        setAnnonces([...annonces, data]);
    }
    const backToList = () => {
        window.location.replace("/")
    }
    const onAddAnnonceClick = () => {
        setShownPage("add an annonce")
    }
    const isEditPage=(val:boolean)=>{
        setIsEdit(val)
    }

    return (
        <>
            <Header />
        <div className={"container"}>


            <div className="list-annonces">

                {showPage === "list" && (
                    <>
                        <div className="btn-add-div">
                            <PlusCircleOutlined  type="button" value="create annonce" onClick={onAddAnnonceClick} className={"icon-add"}/>
                        </div>

                        {/*<input type="button" value="create annonce" onClick={onAddAnnonceClick}/>*/}

                        <AnnonceList list={annonces}/>


                    </>

                )}
                {/*{showPage === "edit an annonce" && <AnnonceForm onBackBtnClickHnd={shownListPage} onSubmitAnnonce={editAnnonce}/>}*/}

            </div>

            {showPage === "add an annonce" &&
                <>
                    <AnnonceForm onBackBtnClickHnd={backToList} onSubmitAnnonce={createAnnonce} isEdit={false} />
                </>

            }
            {showPage === "edit an annonce" &&
                <>
                    <AnnonceForm onBackBtnClickHnd={backToList} onSubmitAnnonce={createAnnonce} isEdit={true}/>
                </>
            }
<Footer />
        </div>
        </>

    )
}