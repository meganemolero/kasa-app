import './Card.css'
import Lodgings from '../../datas/lodging.json'

export default function Card() {
    return (
        <section className='homeCard'>
            <div className='homeCardContainer'>
                {Lodgings.map((logements) => (
                    <a href= {`/lodgings/`+ logements.id} key={logements.id}>
                        <figure>
                            <img src={logements.cover} alt="Différents logements disponibles" className="cardImg"/>
                            <figcaption className="cardTitle">{logements.title}</figcaption>
                        </figure>
                    </a>
                ))}
    
            </div>
        </section>
    )
}







                
                    
                        
                            
                            
    