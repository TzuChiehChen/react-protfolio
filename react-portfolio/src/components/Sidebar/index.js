import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo-jay.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
<div className="nav-bar">
    <Link className="logo" to = "/">
        <img src = {LogoJ} alt="logo" />
        <img className ="sub-logo" src = {LogoSubtitle} alt="jay" />
    </Link>

    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className = "about-Link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        
        <NavLink exact="true" activeclassname="active" className = "contact-Link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
</div>


)

export default Sidebar