import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../datas/Images/LOGO.png'


export default function Header() {
    return (
        <header>
            <nav>
                <img src={ Logo } alt="Logo de Kasa" className="headerLogo"/>
                <ul>
                    <li>
                        <Link
                            to="/" 
                            className="headerNav">
                                Accueil
                        </Link>
                    </li>
                    <li>
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
