import './Footer.css'
import LogoFooter from '../../datas/Images/LOGOFooter.png'


function Footer () {
    return (
        <footer className='footer'>
            <img src= { LogoFooter } alt="Logo de Kasa" className='footerLogo' />
            <p className= 'footerText'> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
