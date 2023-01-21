import React, {useState} from "react";
import './Annonce.scss'
import {IIAnnonce} from "../../interfaces/Annonce";
import { Card } from 'antd';
import axios from "axios";

const { Meta } = Card;

// interface IAnnonceProps {
//     annonce:IIAnnonce,
//     index:number,
//     deleteAnnonce (id:number) : void;
// }

const Annonce  = (props:{annonce:IIAnnonce,index:number}) => {
    const [isEdit, setIsEdit] = useState(false);
    // let annonceInfo = props.annonce;
    const editAnnonce = async (id:String) => {
        setIsEdit(true);
        try {
            await axios.get(`http://localhost:5000/api/annonces/${id}`);


        } catch (e) {
            console.log(e)
        }
    }
  return(
      <div className="annonce">
          <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
              {/*<h3>{props.annonce.pictures}</h3>*/}
              <p className="annonce-info"><span className="annonce-info-title">Localisation: </span>{props.annonce.region}</p>
              <p className="annonce-info"><span className="annonce-info-title">Description of the house: </span>{props.annonce.description}</p>
              <p className="annonce-info"><span className="annonce-info-title">Price: </span>{props.annonce.price.toString()}</p>
              <p className="annonce-info"><span className="annonce-info-title">Number of pieces: </span> {props.annonce.nbPiece.toString()}</p>
              <div className="buttons">
                  <input type="button" value="view"/>
                  {/*<a  value="edit" onClick={() => {}}/>*/}
              </div>
          </Card>




      </div>
  )
}

export default Annonce