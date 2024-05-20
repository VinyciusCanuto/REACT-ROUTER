import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return(
        <nav>
            <Link className="links" to={'/'}>Home</Link>
            <Link className="links" to={'/sobre'}>Sobre</Link>
            <Link className="links" to={'/contato'}>Contato</Link>
        </nav>
    )
}

export default Header