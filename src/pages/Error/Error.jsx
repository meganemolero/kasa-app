//Import du link fourni par le router pour la navigation entre les pages//
import { Link } from "react-router-dom";
//Import de l'image 404//
import ImgError from "../../datas/Images/404error.png";
//Import du CSS//
import './Error.css'
//Fonction Error//
export default function Error() {
    return (
        //Structure de la page Error//
        <main className="errorPage">
            {/* Affichage de l'erreur 404 */}
            <div>
                <img className="errorNumber" src={ImgError} alt="Erreur 404"/>
            </div>
            {/* Texte sous l'erreur */}
            <p className="errorText">Oups! La page que vous demandez n'existe pas</p>
            {/* Utilisation du link pour retrourner sur la page d'acceuil */}
            <Link to = "/" className="errorBacklink">Retourner sur la page d'accueil</Link>   
        </main>
    )
}