import { Link } from "react-router-dom";
import ImgError from "../../datas/Images/404error.png";
import './Error.css'

export default function Error() {
    return (
        <main className="errorPage">
            <div>
                <img className="errorNumber" src={ImgError} alt="Erreur 404"/>
            </div>
            <p className="errorText">Oups! La page que vous demandez n'existe pas</p>
            <Link to = "/" className="errorBacklink">Retourner sur la page d'accueil</Link>   
        </main>
    )
}