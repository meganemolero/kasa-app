import React from "react"
import LodgingsCSS from '../Lodgings/Lodgings.module.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import LodgingDetails from '../../components/LodgingDetails/LodgingDetails'
import Collapse from '../../components/Collapse/Collapse'

import { useParams } from "react-router-dom"
import Logements from "../../datas/lodging.json"



export default function Lodgings() {
    let { id }= useParams();
    const OneLodging = Logements.find((OneLodging) => OneLodging.id ===id)
    
    return (
        <div className={LodgingsCSS.container} class="container">
            <Slideshow />
            <LodgingDetails />
            <div class="collapse">
                <Collapse key={OneLodging.pictures}/>
                <Collapse />
            </div>
            
        </div>
    )
}