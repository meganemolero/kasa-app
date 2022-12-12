import './Header.css'
//Import de link fourni par le router pour la navigation entre les pages//
import { Link } from 'react-router-dom'
import Logo from '../../datas/Images/LOGO.png'


export default function Header() {
    return (
        <header>
            <nav>
                <img src={ Logo } alt="Logo de Kasa" className="headerLogo"/>
                <ul>
                    <li>
                        {/* Lien pour la page d'acceuil */}
                        <Link
                            to="/" 
                            className="headerNav">
                                Accueil
                        </Link>
                    </li>
                    <li>
                        {/* Lien pour la page A propos */}
                        <Link
                            to="/About"
                            className="headerNav">
                                A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>     
    )
}
