import Banner from "../../components/Banner/Banner"
import ImgBannerAbout from "../../datas/Images/ImgBannerAbout.png"
// import ImgBannerAboutMobile from "../../datas/Images/ImgBannerAboutMobile.png"
import Collapse from "../../components/Collapse/Collapse"
import "./About.css"


export default function About() {
    return (
        <div>   
            <Banner src= {ImgBannerAbout} alt="Photo de montagnes" className="bannerAboutDesktop"/>
            {/* <Banner src= {ImgBannerAboutMobile} alt="Photo de montagnes version mobile" className="bannerAboutMobile" /> */}
            <div className="aboutContainer">
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