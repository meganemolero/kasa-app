import { useState } from "react";
import SlideshowCSS from '../Slideshow/Slideshow.module.css';
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
        <section className={SlideshowCSS.container}>
            <div className={SlideshowCSS.slideshow}>
                <img src={photos[currentPhoto]} alt={photos.title} className={SlideshowCSS.img} key={photos.id}/>    
            </div>
            <img src={leftArrow} alt="flèche de défilement gauche" className={ photos.lenght === 1 ? SlideshowCSS.leftArrowInvisible : SlideshowCSS.leftArrow} onClick={previousPicture}/>
            <div className={photos.lenght === 1 ? SlideshowCSS.photoNumberInvisible : SlideshowCSS.photoNumber}>{currentPhoto + 1}/{photos.lenght}</div>
            <img src={rightArrow} alt="flèche de défilement droite" className={ photos.lenght ===1 ? SlideshowCSS.rightArrowInvisible : SlideshowCSS.rightArrow} onClick={nextPicture}/>
        </section>
    )
}

