import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="errorPage" class="errorPage">
            <h1 className="errorNumber" class="errorNumber">404</h1>
            <p className="errorText" class="errorText">Oups! La page que vous demandez n'existe pas</p>
            <Link to = "/" className="errorBacklink" class="errorBacklink">Retourner sur la page d'accueil</Link>   
        </div>
    )
}