import BannerCSS from '../Banner/Banner.module.css';
import BannerPhoto from '../../datas/Images/ImgBannerHome.png';

export default function Banner() {
    return(
        <div className={BannerCSS.banner}class="banner">
            
            <div className={BannerCSS.bannerContent}class="bannerContent">
                <img className={BannerCSS.img} class="img" src={ BannerPhoto} alt='Falaise en bord de mer'/>
                <h1 className={BannerCSS.title} class="title">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}



