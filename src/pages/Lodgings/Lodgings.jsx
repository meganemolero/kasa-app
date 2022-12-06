/*Import du fichier CSS*/
import './Lodgings.css'
/*Import des composants nécessaires à la construction de la page*/
import Slideshow from '../../components/Slideshow/Slideshow'
import LodgingDetails from '../../components/LodgingDetails/LodgingDetails'
import Collapse from '../../components/Collapse/Collapse'
/*Import des Hooks nécessaires*/
import { useParams } from "react-router-dom"
import {useState} from "react"
/*Import du fichier Json contenant les informations des logements*/
import Logements from "../../datas/lodging.json"


/*Fonction Lodgings*/
export default function Lodgings() {
    /*Récupération de l'id contenu dans l'URL*/
    let params = useParams();
    const [lodgings, setLodgings] = useState(Logements.find(e => {
        return e.id === params.id
    }))
    
    const images = [];
    lodgings.images.forEach((image) => {
        images.push(image);
    });
    const equipments = lodgings.equipments;


    return (
        <div className="LodgingsContainer">
            <Slideshow 
                key={lodgings.pictures} 
                photos={lodgings.pictures}/>
            <LodgingDetails 
                key={lodgings.title} 
                lodgingDetails={lodgings}/>
            <div className="LodgingsCollapse">
                <Collapse 
                    key={lodgings.description}
                    title="Description"
                    content={lodgings.description}
                    />
                <Collapse 
                    key={lodgings.equipments}
                    title="Equipements"
                    content={equipments}    
                />
            </div>
    
        </div>
    )
}