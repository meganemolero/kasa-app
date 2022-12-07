import './Rating.css'
import fullStar from "../../datas/Images/fullStar.png"
import emptyStar from "../../datas/Images/emptyStar.png"

export default function Rating(rate) {
    const stars = [1,2,3,4,5];
        return stars.map ((numberOfStars, key) =>
            numberOfStars <= rate.rate ? (
                <img className="fullStar" src={fullStar} alt="étoile pleine" key={key}/>
            ):(
                <img className="emptyStar" src={emptyStar} alt="étoile vide" key={key}/>
            )
        );
}

