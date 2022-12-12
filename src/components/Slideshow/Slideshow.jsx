import './Slideshow.css';
//Import des Hooks d'état et de paramètres//
import { useState } from "react";
import { useParams } from "react-router-dom";
//Import du fichier JSON//
import Logements from "../../datas/lodging.json"
//Import des images de flèches droites et gauches//
import leftArrow from '../../datas/Images/leftArrow.png';
import rightArrow from '../../datas/Images/rightArrow.png'

export default function Slideshow() {
    //Pour rechercher l'id passé dans l'url//
    const {id} =useParams();
    //Variable qui va nous permettre de définir les images à afficher//
    const {pictures} = Logements.find ((log) => log.id === id);
    //Déclaration et initialisation du state//
    const [currentPhoto, setCurrentPhoto] = useState(0);
    //Déclaration des fonctions de défilement des images//
    const nextPicture = () => {
        setCurrentPhoto(currentPhoto === pictures.length -1 ? 0 : currentPhoto +1)
    }
    const previousPicture = () => {
        setCurrentPhoto(currentPhoto === 0 ? pictures.length -1 : currentPhoto -1)
    }

    return (
        <section className="slideshowContainer">
            {/* Affichage des flèches seulement si le fichier JSON contient plus d'une photo */}
            {pictures.length > 1 && (
                <img className="leftArrow" src={leftArrow} alt="Flèche de défilement gauche" onClick={previousPicture} />
            )}
            {pictures.length > 1 && (
                <img className="rightArrow" src={rightArrow} alt="Flèche de défilement droite" onClick={nextPicture} />
            )}
            {pictures.map ((picture, index) => {
                return (
                    //Gestion de l'affichage des images//
                    <div key={index}>
                        {index === currentPhoto && (
                            <img className="slideshowImg" src={picture} alt={picture.desccription} />
                        )}
                        {/* Gestion de l'affichage de la numérotation des images */}
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

