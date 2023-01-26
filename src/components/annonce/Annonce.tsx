import React, {useState} from "react";
import './Annonce.scss'
import {IAnnonce, IAnnonceProps, IIAnnonce} from "../../interfaces/Annonce";
import { Card } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {DeleteOutlined,EditOutlined,EyeOutlined} from "@ant-design/icons";


const { Meta } = Card;



export const Annonce:React.FC<IAnnonceProps>  = ({annonce,annonceIndex,onUpdate,onRemove}) => {

    const [showForm, setShownForm] = useState("");


    return(
      <div className="annonce">
          <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
              {/*<h3>{props.annonce.pictures}</h3>*/}
              <p className="annonce-info"><span className="annonce-info-title">Localisation: </span>{annonce.region}</p>
              <p className="annonce-info"><span className="annonce-info-title">Description of the house: </span>{annonce.description}</p>
              <p className="annonce-info"><span className="annonce-info-title">Price: </span>{annonce.price.toString()}</p>
              <p className="annonce-info"><span className="annonce-info-title">Number of pieces: </span> {annonce.nbPiece.toString()}</p>

              <div className="buttons">

                  <EyeOutlined />
                  <Link to={`/annonce/${annonce._id}`} className={"edit-btn"}> <EditOutlined  /></Link>
                  <DeleteOutlined onClick={() => onRemove(annonce,
                      annonce._id)} />


              </div>
          </Card>
      </div>
  )
}

export default Annonce