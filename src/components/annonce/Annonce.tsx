import React, {useState} from "react";
import './Annonce.scss'
import { IAnnonceProps} from "../../interfaces/Annonce";
import { Card } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {DeleteOutlined,EditOutlined,EyeOutlined} from "@ant-design/icons";
import axios from "axios";
import AnnoncePage from "../../pages/annoncePage/AnnoncePage";


export const Annonce:React.FC<IAnnonceProps>  = ({annonce,annonceIndex,onUpdate,onRemove,onGetAnnonce}) => {

    const [showForm, setShownForm] = useState("");

   // {console.log("pictures"+annonce.pictures)}

    // const getAnnonce = async (id: string | undefined) =>{
    //     try{
    //         const res =  await axios.get(`http://localhost:5000/api/annonces/${id}`)
    //         // setAnnonce(res.data)
    //         console.log("the result of the api : "+res.data)
    //
    //
    //     }catch(e){
    //         console.log(e)
    //     }
    // }

    return(

      <div className="annonce">

          <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}

          >
              {
                  //console.log("pictures"+annonce.pictures)
                  // annonce.pictures.map(
                  //     item =>{
                  //         console.log(item)
                  //         let path :string =`../../../../uploads/${item}`
                  //         return(
                  //
                  //         <>
                  //         <img src={path} alt={item}/>
                  //         </>
                  //     )
                  //
                  //
                  //     }
                  // )
              }


              <p className="annonce-info"><span className="annonce-info-title">Localisation: </span>{annonce.region}</p>
              <p className="annonce-info"><span className="annonce-info-title">Description of the house: </span>{annonce.description}</p>
              <p className="annonce-info"><span className="annonce-info-title">Price: </span>{annonce.price.toString()}</p>
              <p className="annonce-info"><span className="annonce-info-title">Number of pieces: </span> {annonce.nbPiece.toString()}</p>

              <div className="buttons">

                  <Link to={`/annonce/getAnnonce/${annonce._id}`} className={"edit-btn"}><EyeOutlined  /></Link>

                  <Link to={`/annonce/${annonce._id}`} className={"edit-btn"}> <EditOutlined  /></Link>
                  <DeleteOutlined onClick={() => onRemove(annonce,annonce._id)} />


              </div>
          </Card>
      </div>
  )
}

export default Annonce