import './NavigationMenu.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navigation-menu">
                <ul className="list-li">
                    <li><NavLink to='/hookahs'>Кальяны</NavLink></li>
                    <li><NavLink to='/tobacco'>Табак</NavLink></li>
                    <li><NavLink to='/vape'>Vape</NavLink></li>
                    <li><NavLink to='/hoses'>Шланги</NavLink></li>
                    <li><NavLink to='/flasks'>Колбы</NavLink></li>
                    <li><NavLink to='/bowls'>Чаши</NavLink></li>
                    <li><NavLink to='/accessories'>Аксессуары</NavLink></li>
                    <li><NavLink to='/coal'>Уголь</NavLink></li>
                </ul>
        </div>
    );
}
export default Navbar;