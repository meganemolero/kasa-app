//Import des composants nécessaires//
import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'
import Lodgings from '../../datas/lodging.json'
//import du CSS//
import './Home.css'
//Import de la photo de bannière de la page Home//
import BannerHomePhoto from '../../datas/Images/ImgBannerHome.png'
//Fonction Home//
export default function Home() {
    return (
        <main className='mainHome'> 
            {/* Bannière avec sa source son alt et son titre  */}
            <Banner 
                src={BannerHomePhoto}
                alt="Falaises en bord de mer"
                title={"Chez vous, partout et ailleurs"}
            />
            {/* Liste des logements disponibles grace à la méthode map et composant card qui affiche les logements renvoyés */}
            <section className='homeCard'>
                {Lodgings.map(logements => (
                        <Card
                        logements={logements}
                        key={logements.id}
                        />
                ))}     
            </section>
        </main>
    )
}


