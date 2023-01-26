import './Header.scss'
import {Link} from "react-router-dom";
 const Header = () =>{

    return(
        <>
            <div className="header">
                <Link to="/login" className={"item"} >Login</Link>
                <Link to="/register" className={"item"} >Register</Link>
            </div>


        </>
    )
}
export default Header