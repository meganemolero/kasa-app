import './Lodgings.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import LodgingDetails from '../../components/LodgingDetails/LodgingDetails'
import Collapse from '../../components/Collapse/Collapse'

import { useParams } from "react-router-dom"
import Logements from "../../datas/lodging.json"



export default function Lodgings() {
    let { id }= useParams();
    const LogId = ({id})

    const oneLodging = Logements.find(e => e.id ===LogId.id)
    const equipments = oneLodging.equipments;
    return (
        <div className="LodgingsContainer">
            <Slideshow key={oneLodging.pictures} photos={oneLodging.pictures}/>
            <LodgingDetails key={oneLodging.title} lodgingDetails={oneLodging}/>
            <div className="LodgingsCollapse">
                <Collapse 
                    key={oneLodging.description}
                    title="Description"
                    content={oneLodging.description}
                    />
                <Collapse 
                    key={oneLodging.equipments}
                    title="Equipements"
                    content={equipments}    
                />
            </div>
    
        </div>
    )
}