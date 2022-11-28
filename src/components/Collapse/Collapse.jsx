import './Collapse.css'
import { useState } from 'react'
import arrowCollapse from '../../datas/Images/arrowCollapse.png'

export default function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div class="collapseContainer">
            <div class="collapseTitle" onClick= {() => setIsOpen(false)}>
                {title}
                <img src={arrowCollapse} class="collapseArrowOpen" alt='flèche de déroulement du cartouche' />
            </div>
            <div class="collapseContent">
                {content}
            </div>
        </div>    
    ) : (
        <div class="collapseContainer">
            <div class="collapseTitle" onClick= {() => setIsOpen(true)}>
                {title}
                <img src={arrowCollapse} class="collapseArrow" alt='flèche de déroulement du cartouche'/>
            </div> 
        </div>
    )
}
