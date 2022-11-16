
import BannerCSS from '../Banner/Banner.module.css';
import BannerPhoto from '../../datas/Images/ImgBannerHome.png';
<div>Coucou</div>
export default function Banner() {
    return(
        <Banner className={BannerCSS.banner}>
            <div className={BannerCSS.bannerContent}>
                <img className={BannerCSS.img} src={ BannerPhoto} alt='Falaise en bord de mer'/>
                <h1 className={BannerCSS.title}>Chez vous, partout et ailleurs</h1>
            </div>
        </Banner>
    )
}



