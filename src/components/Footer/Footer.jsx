import FooterCSS from '../Footer/Footer.module.css'
import LogoFooter from '../../datas/Images/LOGOFooter.png'


function Footer () {
    return (
        <footer className= { FooterCSS.footer}>
            <img src= { LogoFooter } alt="Logo de Kasa" className= {FooterCSS.logo} />
            <p className= { FooterCSS.text}> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
