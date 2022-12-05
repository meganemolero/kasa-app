import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'

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
            <Card />
        </div>
    )
}


