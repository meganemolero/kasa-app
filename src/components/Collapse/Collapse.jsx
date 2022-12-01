import './Collapse.css'
import { useState } from 'react'
import arrowCollapse from '../../datas/Images/arrowCollapse.png'

export default function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

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
    ) : (
        <div className="collapseContainer">
            <div className="collapseTitle" onClick= {() => setIsOpen(true)}>
                {title}
                <img src={arrowCollapse} className="collapseArrow" alt='flèche de déroulement du cartouche'/>
            </div> 
        </div>
    )
}
