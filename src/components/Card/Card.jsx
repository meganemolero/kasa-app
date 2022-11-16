import CardCSS from '../Card/Card.module.css'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import Lodgings from '../../datas/lodging.json'

export default function Card({cover, title, id}) {

    // const [lodgings] = useState(Lodgings)

    return (
        <div className={CardCSS.section}>
            <Link to={`/Lodgings/${id}`}>
                <div className={CardCSS.card}>
                    <img src={cover} alt={title} className={CardCSS.img}/>
                    <h1 className={CardCSS.title}>{title}</h1>
                </div>
            </Link>    
        </div>
    )
}