// Import du CSS
import './Collapse.css'
// import du hook use State
import { useState } from 'react'
// import de l'image de la flèche du collape
import arrowCollapse from '../../datas/Images/arrowCollapse.png'

export default function Collapse({ title, content }) {
    //Déclaration et initialisation du state //
    const [isOpen, setIsOpen] = useState(false)
    //Résultat si collapse ouvert//
    return isOpen ? (
        <div className="collapseContainer">
            <div className="collapseTitle" onClick= {() => setIsOpen(false)}>
                {title}
                <img src={arrowCollapse} className="collapseArrowOpen" alt='flèche de déroulement du cartouche' />
            </div>
            <div className="collapseContent">
                {content}
            </div>
        </div>   
        //Résultat si collapse fermé// 
    ) : (
        <div className="collapseContainer">
            <div className="collapseTitle" onClick= {() => setIsOpen(true)}>
                {title}
                <img src={arrowCollapse} className="collapseArrow" alt='flèche de déroulement du cartouche'/>
            </div> 
        </div>
    )
}
