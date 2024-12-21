import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/Search.png';
import arrow from '../../assets/icons/ExpandArrowA.png';
import menuIcon from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/close.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav>
            <a href="#">
                <img src={logo} alt="logo"/>
            </a>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href='#'>Courses</a>
                    </li>
                    <li>
                        <a href='#'>Find Tutor</a>
                    </li>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li className="dropdown">
                        <a>Categories</a> {isOpen ? '' : <img src={arrow}/>}
                        <div className="dropdown-content">
                            <a href="#">Category 1</a>
                            <a href="#">Category 2</a>
                            <a href="#">Category 3</a>
                            <a href="#">Category 4</a>
                        </div>
                    </li>
                </ul>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                <img src={isOpen ? closeIcon : menuIcon} alt="menu icon"/>
            </button>
            <div className={`search ${isSearchOpen ? 'open' : ''}`}>
                <input type="text" placeholder="Search"/>
                <button onClick={toggleSearch}>
                    <img src={search}/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;