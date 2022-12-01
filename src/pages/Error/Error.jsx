import { Link } from "react-router-dom";
import './Error.css'

export default function Error() {
    return (
        <div className="errorPage">
            <h1 className="errorNumber">404</h1>
            <p className="errorText">Oups! La page que vous demandez n'existe pas</p>
            <Link to = "/" className="errorBacklink">Retourner sur la page d'accueil</Link>   
        </div>
    )
}