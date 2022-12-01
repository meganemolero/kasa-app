import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'
import Lodgings from '../../datas/lodging.json'

import BannerHomePhoto from '../../datas/Images/ImgBannerHome.png'

export default function Home() {
    return (
        <div>  
            <Banner 
            src={BannerHomePhoto}
            alt="Falaises en bord de mer"
            title={"Chez vous, partout et ailleurs"}
            />
            <section>
                    {Lodgings.map((logements) => (
                        <Card
                            className="homeCard"
                            key={logements.id}   
                            title={logements.title}
                            Link={`/lodgings/`+ logements.id}
                            cover={logements.cover}
                        >
                        </Card>
                    ))}
            </section>    
        </div>
    )
}


