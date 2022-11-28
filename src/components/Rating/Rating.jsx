import RatingCSS from '../Rating/Rating.module.css'
import fullStar from "../../datas/Images/fullStar.png"
import emptyStar from "../../datas/Images/emptyStar.png"

export default function Rating(props) {
    const stars = [1,2,3,4,5];
    const rating = props.rating;
        return(
            <div className={RatingCSS.container} class="container">
                {stars.map((star) =>
                    rating >= star ? (
                        <img src={fullStar} alt="Etoile pleine" className={RatingCSS.star} class="star"key={star.toString()}/>
                    ) : (
                        <img src={emptyStar} alt="Etoile vide" className={RatingCSS.star} class="star" key={star.toString()}/>  
                    )
                
                )}
            </div>
        )
}

