import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/logo-j.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
<div className="nav-bar">
    <NavLink className="logo" exact="true" activeclassname="active" to="/">
      <img src={LogoJ} alt="logo" />
    </NavLink>

    <nav>
        <NavLink exact="true" activeclassname="active" className = "about-link" to="/about">
            About
        </NavLink>
        
        <NavLink exact="true" activeclassname="active" to="/">
            Projects
        </NavLink>

        <NavLink exact="true" activeclassname="active" className = "contact-link" to="/contact">
            Contact
        </NavLink>
    </nav>
</div>
)

export default Sidebar