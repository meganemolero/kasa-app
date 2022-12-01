import './Card.css'

export default function Card({Link, title, cover}) {
    return (
        <div>
            <a href= {Link} className="cardContainer">
                <figure>
                    <img src={cover} alt="Différents logements disponibles" className="cardImg"/>
                    <figcaption className="cardTitle">{title}</figcaption>   
                </figure>
            </a>
        </div>
    )
}






