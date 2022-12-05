import './Card.css'
import Lodgings from '../../datas/lodging.json'

export default function Card() {
    return (
        <section className='homeCard'>
            <div className='homeCardContainer'>
                {Lodgings.map((locations) => (
                    // <a href= {`/lodgings/`+ locations.id} key={locations.id} className='CardLink'>
                        <figure>
                            <img src={locations.cover} alt="Différents logements disponibles" className="cardImg"/>
                            <figcaption className="cardTitle">{locations.title}</figcaption>
                        </figure>
                    // </a>
                ))}
            </div>
        </section>
    )
}







                
                    
                        
                            
                            
    