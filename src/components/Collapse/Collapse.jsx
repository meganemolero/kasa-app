import CollapseCSS from '../Collapse/Collapse.module.css'
import { useState } from 'react'
import arrowCollapse from '../../datas/Images/arrowCollapse.png'

export default function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className={CollapseCSS.container}>
            <div className={CollapseCSS.title} onClick= {() => setIsOpen(false)}>
                {title}
                <img src={arrowCollapse} className={CollapseCSS.arrowOpen} alt='flèche de déroulement du cartouche' />
            </div>
            <div className={CollapseCSS.content}>
                {content}
            </div>
        </div>    
    ) : (
        <div className={CollapseCSS.container}>
            <div className={CollapseCSS.title} onClick= {() => setIsOpen(true)}>
                {title}
                <img src={arrowCollapse} className={CollapseCSS.arrow} alt='flèche de déroulement du cartouche'/>
            </div> 
        </div>
    )
}
