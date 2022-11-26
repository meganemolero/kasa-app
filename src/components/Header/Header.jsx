import HeaderCSS from '../Header/Header.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../datas/Images/LOGO.png'


export default function Header() {
    let activeStyle = {textDecoration :"underline"};
    return (
        <header className={ HeaderCSS.header }class="header">
            <img src={ Logo } alt="Logo de Kasa" className={ HeaderCSS.logo } class="logo"/>
            <nav className={ HeaderCSS.nav} class="nav">
                <NavLink to="/" className={ HeaderCSS.navHome} class="navHome" style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
                >
                Accueil
                </NavLink>
                <NavLink to="/About" className={ HeaderCSS.navAbout} class="navAbout" style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
                >
                A propos
                </NavLink>
            </nav>
        </header>     
    )
}
