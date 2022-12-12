/*Import du fichier CSS*/
import './Lodgings.css'
/*Import des composants nécessaires à la construction de la page*/
import Slideshow from '../../components/Slideshow/Slideshow'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'
import ErrorPage from '../Error/Error'
/*Import des Hooks nécessaires*/
import { useParams } from "react-router-dom"
/*Import du fichier Json contenant les informations des logements*/
import Logements from "../../datas/lodging.json"


/*Fonction Lodgings*/
export default function Lodgings() {
    //Hook useParams pour récupérer les données d'URL//
    const {id} = useParams();
    //Utilisation du find pour aller comparer l'id a celui passé dans l'URL//
    const lodgingsContent = Logements.find((e) => e.id === id);
    //Création de la variable contenant l'objet avec toutes les caractéristiques du logement ou un objet vide //
    const {title, location, tags, host, rating, description, equipments} = lodgingsContent || {}
    //Condition pour rechercher s'il y a bien un contenu //
    return ( lodgingsContent ?
        //Structure de la page//
        <main>
            {/* Gallerie photos */}
            <Slideshow />
            {/* Informations du logement */}
            <section className="lodgingsDetails">
                <div className="lodgingsDetailsLogement">
                    <h1 className="logementTitle">{title}</h1>
                    <h2 className="logementLocation">{location}</h2>
                    <div className="logementTags">
                        {/* Méthode map pour afficher le nombre de tags conformes par rapport au fichier JSON */}
                        {tags.map((tag) => {
                            return (
                                <p key={`${tag}`} className="tag">{tag}</p>
                            )
                        })}
                    </div>    
                </div>
                {/* Informations sur l'hôte */}
                <div className="lodgingsDetailsHost">
                    <div className="hostInformations">
                        <p className="hostInformationsName">{host.name}</p>
                        <img className="hostInformationsPicture"src={host.picture} alt="Propriétaire du bien {host.name}"  />
                    </div>
                    <div className="hostInformationsRating">
                        {/* Composant Rating qui gère la notation en rapport avec le fichier JSON */}
                        <Rating rate={rating} />
                    </div>
                </div>
            </section>
            {/* Collapses de la page Logements */}
            <section className="lodgingsCollapses">
                {/* Collapse de description */}
                <Collapse className="lodgingsCollContent" title="Description" 
                          content={<span className="lodgingsDetailsCollapsesContent">{`${description}`}</span>}/>
                {/* Collapse des equipements */}
                <Collapse className="lodgingsCollContent" title="Equipements" content={
                    <ul className="lodgingsDetailsCollapsesContent">
                        {/* Méthode map pour aller lister les différents equipements en rapport avec le fichier JSON */}
                        {equipments.map((equip, index) => {
                            return <li key={index}>{equip}</li>
                        })}
                    </ul>  
                }/>
            </section>
            {/* Si pas de contenu page d'erreur */}
        </main> : <ErrorPage />
    );
}