import './Card.css'

export default function Card(props){
    return (
        <div class="section">
            <img 
                src={props.cover} 
                alt="Logement séléctionné" 
                class="img"
            />
            <h1 class="title">{props.title}</h1>   
        </div>
    )
}