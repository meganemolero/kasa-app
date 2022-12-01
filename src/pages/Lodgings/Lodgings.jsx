import './Lodgings.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import LodgingDetails from '../../components/LodgingDetails/LodgingDetails'
import Collapse from '../../components/Collapse/Collapse'

import { useParams } from "react-router-dom"
import Logements from "../../datas/lodging.json"



export default function Lodgings() {
    let { id }= useParams();
    const OneLodging = Logements.find((OneLodging) => OneLodging.id ===id)
    const equipments = OneLodging.equipments;
    
    return (
        <div className="LodgingsContainer">
            <Slideshow key={OneLodging.pictures} photos={OneLodging.pictures}/>
            <LodgingDetails key={OneLodging.title} lodgingDetails={OneLodging}/>
            <div className="LodgingsCollapse">
                <Collapse 
                    key={OneLodging.description}
                    title="Description"
                    content={OneLodging.description}
                    />
                <Collapse 
                    key={OneLodging.equipments}
                    title="Equipements"
                    content={equipments.map((equipements) => (
                        <li key={equipements} style={{listStyle: "none"}}>
                            {equipements}
                        </li>
                    ))}  
                />
            </div>
    
        </div>
    )
}