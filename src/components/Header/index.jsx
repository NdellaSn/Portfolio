import { handleScroll } from '../../utils/animations/scroll';
import './header.scss'
import { useEffect, useState } from 'react';
import logo_noir from '../../assets/images/logo/logo-noir.png'
import logo_blanc from '../../assets/images/logo/logo-blanc.png'
import { Link } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        let item = handleScroll(setIsScrolled);
        window.addEventListener('scroll', () => {
            item = handleScroll(setIsScrolled);
            if (item !== -1)
                setSelectedItem(item);
        });

    }, []);


    const openMenu = () => {
        document.getElementById('nav-menu').style.display = "block"
    }

    const closeMenu = () => {
        document.getElementById('nav-menu').style.display = "none"
    }

    return (
        <header className={isScrolled ? 'fade-in' : 'fade-out'}>
            <button className='nav__menu__btn nav__menu__btn--open' onClick={() => { openMenu() }} title='boutton menu'><i className="fa-solid fa-bars"></i></button>
            <nav id='nav-menu' >

                <button className='nav__menu__btn nav__menu__btn--close' onClick={() => { closeMenu() }} title='boutton fermeture menu'><i className="fa-solid fa-xmark"></i></button>
                <div className='nav__menu_bg'></div>

                <div className='nav__header'>
                    <Link to="/" className='logo'>
                        <img className='logo--noir' src={logo_noir} alt="logo de mon site" height="100%" width="36%" />
                        <img className='logo--blanc' src={logo_blanc} alt="logo de mon site" height="100%" width="36%" />
                        </Link>
                    <ul className='menu'>
                        <li className={selectedItem === 0 ? 'menu__item--selected menu__item ' : 'menu__item '}><a href="/#welcome">Accueil</a></li>
                        <li className={selectedItem === 1 ? 'menu__item--selected menu__item ' : 'menu__item '}><a href="/#a-propos">A propos</a></li>
                        <li className={selectedItem === 2 ? 'menu__item--selected menu__item ' : 'menu__item '}><a href="/#competences">Compétences</a></li>
                        <li className={selectedItem === 3 ? 'menu__item--selected menu__item ' : 'menu__item '}><a href="/#projets">Projets</a></li>
                        <li className={selectedItem === 4 ? 'menu__item--selected menu__item ' : 'menu__item '}><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

            </nav>
        </header>


    )

}

export default Header