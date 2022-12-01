import { useState } from "react";
import './Slideshow.css';
import leftArrow from '../../datas/Images/leftArrow.png';
import rightArrow from '../../datas/Images/rightArrow.png'

export default function Slideshow({ photos }) {
    const [currentPhoto, setCurrentPhoto] = useState(0)

    const lenght = photos.lenght

    const nextPicture = () => {
        setCurrentPhoto(currentPhoto === lenght -1 ? 0 : currentPhoto +1)
    }
    const previousPicture = () => {
        setCurrentPhoto(currentPhoto === 0 ? lenght -1 : currentPhoto -1)
    }
    return (
        <section className="slideshowContainer">
            <div className="slideshow">
                <img src={photos[currentPhoto]} alt={photos.title} className="slideshowImg" key={photos.id}/>    
            </div>
            <img src={leftArrow} alt="flèche de défilement gauche" className={ photos.lenght === 1 ? "slideshowLeftArrowInvisible" : "slideshowLeftArrow"} onClick={previousPicture}/>
            <div className={photos.lenght === 1 ? "slideshowPhotoNumberInvisible" : "slideshowPhotoNumber"}>{currentPhoto + 1}/{photos.lenght}</div>
            <img src={rightArrow} alt="flèche de défilement droite" className={ photos.lenght ===1 ? "slideshowRightArrowInvisible" : "slideshowRightArrow"} onClick={nextPicture}/>
        </section>
    )
}

