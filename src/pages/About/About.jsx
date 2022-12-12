//Import des composants nécessaires//
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
//import de l'image de la bannière//
import ImgBannerAbout from "../../datas/Images/ImgBannerAbout.png"
//import du CSS//
import "./About.css"

//Export de la fonction//
export default function About() {
    return (
        //Création de la structure de la page//
        <div>   
            {/* Banner avec son image spécifique à cette page  */}
            <Banner src= {ImgBannerAbout} alt="Photo de montagnes" className="bannerAboutDesktop"/>
            <div className="aboutContainer">
                {/* Différents collapse avec chacun leur titre et leur contenu */}
                <Collapse  
                    className="collapseAbout"
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiablilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Collapse 
                    className="collapseAbout" 
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse  
                    className="collapseAbout"
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Collapse 
                    className="collapseAbout"
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes. " 
                />
            </div>      
        </div>
    )
}