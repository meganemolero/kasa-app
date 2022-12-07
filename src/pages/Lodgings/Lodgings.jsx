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
    const {id} = useParams();
    const lodgingsContent = Logements.find((e) => e.id === id);
    const {title, location, tags, host, rating, description, equipments} = lodgingsContent || {}

    return ( lodgingsContent ?
        <main>
            <Slideshow />
            <section className="lodgingsDetails">
                <div className="lodgingsDetailsLogement">
                    <h1 className="logementTitle">{title}</h1>
                    <h2 className="logementLocation">{location}</h2>
                    <div className="logementTags">
                        {tags.map((tag) => {
                            return (
                                <p key={`${tag}`} className="tag">{tag}</p>
                            )
                        })}
                    </div>    
                </div>
                <div className="lodgingsDetailsHost">
                    <div className="hostInformations">
                        <p className="hostInformationsName">{host.name}</p>
                        <img className="hostInformationsPicture"src={host.picture} alt="Propriétaire du bien {host.name}"  />
                    </div>
                    <div className="hostInformationsRating">
                        <Rating rate={rating} />
                    </div>
                </div>
            </section>
            <section className="lodgingsCollapses">
                <Collapse className="lodgingsCollContent" title="Description" 
                          content={<span className="lodgingsDetailsCollapsesContent">{`${description}`}</span>}/>
                <Collapse className="lodgingsCollContent" title="Equipements" content={
                    <ul className="lodgingsDetailsCollapsesContent">
                        {equipments.map((equipment) => {
                            return <li key={`$equipment`}>{equipment}</li>
                        })}
                    </ul>  
                }/>
            </section>
        </main> : <ErrorPage />
    );
}