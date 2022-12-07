

export default function Card(props) {
    return (
            <figure 
                key={props.logements.id}
                onClick={() => window.location.href = `/lodgings/${props.logements.id}`}>
                <img 
                    src={props.logements.cover} 
                    alt={props.logements.title }
                />
                <figcaption>
                    <h2>
                    {props.logements.title}
                    </h2>
                </figcaption>   
            </figure>    
    )
}






                
                    
                        
                            
                            
    