import Banner from '../../components/Banner/Banner'
import Card  from '../../components/Card/Card'
import HomeCSS from '../Home/Home.module.css'
import Lodgings from '../../datas/lodging.json'

export default function Home() {
    return (
        <div className= {HomeCSS.home}class="home">  
            <Banner />
            <section class="homeCard">
                <ul>
                    {Lodgings.map(({ cover, title, id }) => (
                        <Card 
                            key={id}
                            
                            cover={cover}
                            title={title}
                        />
                    ))}
                </ul>
            </section>    
        </div>
    )
}


