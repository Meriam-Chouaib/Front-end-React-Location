import React from 'react';
import './Footer.scss'
import {PATHS} from "../../core/enums/paths";
import {Link} from "react-router-dom";

const Footer:React.FC = () => {
    return (
        <div className={"footer"}>
            <Link to={PATHS.HOME} className={"item"}>Home</Link>
            <Link to={PATHS.HOME} className={"item"}>List of annonces</Link>

        </div>
    );
};

export default Footer;
