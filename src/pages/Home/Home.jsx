import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'
import Lodgings from '../../datas/lodging.json'

import './Home.css'

import BannerHomePhoto from '../../datas/Images/ImgBannerHome.png'

export default function Home() {
    return (
        <main className='mainHome'>  
            <Banner 
                src={BannerHomePhoto}
                alt="Falaises en bord de mer"
                title={"Chez vous, partout et ailleurs"}
            />
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


