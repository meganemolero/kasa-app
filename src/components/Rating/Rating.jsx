import './Rating.css'
import fullStar from "../../datas/Images/fullStar.png"
import emptyStar from "../../datas/Images/emptyStar.png"

export default function Rating(rate) {
    const stars = [1,2,3,4,5];
        //Méthode map pour récupérer le nombre d'étoile dans le fichier JSON//
        return stars.map ((numberOfStars, key) =>
            // Condition pour savoir le nombre d'étoiles (vide ou pleines) à afficher 
            numberOfStars <= rate.rate ? (
                <img className="fullStar" src={fullStar} alt="étoile pleine" key={key}/>
            ):(
                <img className="emptyStar" src={emptyStar} alt="étoile vide" key={key}/>
            )
        );
}

