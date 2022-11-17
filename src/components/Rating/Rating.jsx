import RatingCSS from '../Rating/Rating.module.css'
import fullStar from "../../datas/Images/fullStar.png"
import emptyStar from "../../datas/Images/emptyStar.png"

export default function Rating() {
    const stars = [1,2,3,4,5];
        return(
            <div className={RatingCSS.container}>
                {stars.map((star) =>
                    rating >= star ? (
                        <img src={fullStar} alt="Etoile pleine" className={RatingCSS.star} key={star.toString()}/>
                    ) : (
                        <img src={emptyStar} alt="Etoile vide" className={RatingCSS.star} key={star.toString()}/>  
                    )
                
                )}
            </div>
        )
}

