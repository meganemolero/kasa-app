import './Header.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../datas/Images/LOGO.png'


export default function Header() {
    return (
        <header className='header'>
            <img src={ Logo } alt="Logo de Kasa" className="headerLogo"/>
            <nav className="headerNav">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => {
                        return isActive ? "activeLink" : "";
                    }} 
                >
                    Accueil
                </NavLink>
                <NavLink 
                to="/About" 
                className={({ isActive }) => {
                    return isActive ? "activeLink" : "";
                }} 
                >
                A propos
                </NavLink>
            </nav>
        </header>     
    )
}
