import { NavLink } from 'react-router-dom';



const NavBar = () => {
    
    return(
        <nav className="menu">
        <ul>
        <li>
        <NavLink to="/">
        Accueil
        </NavLink>
        </li>
        <li>
        <NavLink to="/admin">
        Admin Animal Page
        </NavLink>
        </li>
        <li>
        <NavLink to="/contactform">
        Contact
        </NavLink>
        </li>
        
        <li>
        <NavLink to="/admincontact">
        Admin Contact
        </NavLink>
        </li>
        
    
        </ul>
        </nav>
        
        
        );
    
}

export default  NavBar;