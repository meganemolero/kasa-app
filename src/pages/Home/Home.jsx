import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'
import HomeCSS from '../Home/Home.module.css'
import Lodgings from '../../datas/lodging.json'
import { Link } from 'react-router-dom'

import BannerHomePhoto from '../../datas/Images/ImgBannerHome.png'

export default function Home() {
    return (
        <div className= {HomeCSS.home}class="home">  
            <Banner 
            src={BannerHomePhoto}
            alt="Falaises en bord de mer"
            title={"Chez vous, partout et ailleurs"}
            />
            <section class="homeCard">
                    {Lodgings.map((logements) => {
                        return (
                            <Link 
                                class="card" >
                                key={logements.id}   
                                title={logements.title}
                                to={`/lodgings/${logements.id}`}
                                <Card {...logements}/>
                            </Link>
                        )
                    })}
            </section>    
        </div>
    )
}


