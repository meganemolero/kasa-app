import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'
import HomeCSS from '../Home/Home.module.css'

export default function Home() {
    return (
        <div className= {HomeCSS.home}>  
            
            <Banner />
            <Card />
        </div>
    )
}


