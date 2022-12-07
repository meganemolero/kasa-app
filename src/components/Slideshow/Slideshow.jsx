import './Slideshow.css';
import { useState } from "react";
import { useParams } from "react-router-dom";
import Logements from "../../datas/lodging.json"
import leftArrow from '../../datas/Images/leftArrow.png';
import rightArrow from '../../datas/Images/rightArrow.png'

export default function Slideshow() {
    const {id} =useParams();
    const {pictures} = Logements.find ((log) => log.id === id);
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const nextPicture = () => {
        setCurrentPhoto(currentPhoto === pictures.length -1 ? 0 : currentPhoto +1)
    }
    const previousPicture = () => {
        setCurrentPhoto(currentPhoto === 0 ? pictures.length -1 : currentPhoto -1)
    }

    return (
        <section className="slideshowContainer">
            {pictures.length > 1 && (
                <img className="leftArrow" src={leftArrow} alt="Flèche de défilement gauche" onClick={previousPicture} />
            )}
            {pictures.length >1 && (
                <img className="rightArrow" src={rightArrow} alt="Flèche de défilement droite" onClick={nextPicture} />
            )}
            {pictures.map ((picture, index) => {
                return (
                    <div key={index}>
                        {index === currentPhoto && (
                            <img className="slideshowImg" src={picture} alt={picture.desccription} />
                        )}
                        {index === currentPhoto && (
                            <div className="slideshowImgNumber">
                                {currentPhoto +1}/{pictures.length}
                            </div>
                        )}
                    </div>
                );
            })}     
        </section>   
    );
}

