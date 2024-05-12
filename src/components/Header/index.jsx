import { handleScroll } from '../../utils/animations/scroll';
import './header.scss'
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo/logo-noir.png'
import { Link } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const item = handleScroll(setIsScrolled);
            if (item !== -1)
                setSelectedItem(item);
        });

    }, []);


    const openMenu=()=>{
        document.getElementById('nav-menu').style.display="block"
    }

    const closeMenu=()=>{
        document.getElementById('nav-menu').style.display="none"
    }

    return (
        <header className={isScrolled ? 'fade-in' : 'fade-out'}>
            <button className='nav__menu__btn nav__menu__btn--open' onClick={()=>{openMenu()}}><i className="fa-solid fa-bars"></i></button>
            <nav id='nav-menu' >

                <button className='nav__menu__btn nav__menu__btn--close' onClick={()=>{closeMenu()}}><i className="fa-solid fa-xmark"></i></button>
                <div className='nav__menu_bg'></div>

                <div className='nav__header'>
                    <Link to="/" className='logo'><img src={logo} alt="" /></Link>
                    <ul className='menu'>
                        <li className={selectedItem === 0 ? 'menu__item--selected menu__item ' : 'menu__item '}><Link to="#welcome">Accueil</Link></li>
                        <li className={selectedItem === 1 ? 'menu__item--selected menu__item ' : 'menu__item '}><Link to="#a-propos">A propos</Link></li>
                        <li className={selectedItem === 2 ? 'menu__item--selected menu__item ' : 'menu__item '}><Link to="#competences">Compétences</Link></li>
                        <li className={selectedItem === 3 ? 'menu__item--selected menu__item ' : 'menu__item '}><Link to="#projets">Projets</Link></li>
                        <li className={selectedItem === 4 ? 'menu__item--selected menu__item ' : 'menu__item '}><Link to="#contact">Contact</Link></li>
                    </ul>
                </div>

            </nav>
        </header>


    )

}

export default Header