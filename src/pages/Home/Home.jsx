import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'
import Lodgings from '../../datas/lodging.json'

import './Home.css'

import BannerHomePhoto from '../../datas/Images/ImgBannerHome.png'

export default function Home() {
    return (
        <div>  
            <Banner 
            src={BannerHomePhoto}
            alt="Falaises en bord de mer"
            title={"Chez vous, partout et ailleurs"}
            />
            <section className='homeCard'>
                <div className='homeCardContainer'>
                    {Lodgings.map((logements) => (
                        <Card
                        key={logements.id}   
                        title={logements.title}
                        Link={`/lodgings/`+ logements.id}
                        cover={logements.cover}
                        >
                        </Card>
                ))}
                </div>
            </section>
        </div>
    )
}


