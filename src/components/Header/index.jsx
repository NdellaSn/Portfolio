import { handleScroll } from '../../utils/animations/scroll';
import './header.scss'
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo/logo-noir.png'

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



    return (
        <header className={isScrolled ? 'fade-in' : 'fade-out'}>
            <nav className='nav__header'>
                <span className='logo'><img src={logo} alt="" /></span>
                <ul className='menu'>
                    <li className={selectedItem === 0 ? 'menu__item--selected menu__item ' : 'menu__item '}>Accueil</li>
                    <li className={selectedItem === 1 ? 'menu__item--selected menu__item ' : 'menu__item '}>A propos</li>
                    <li className={selectedItem === 2 ? 'menu__item--selected menu__item ' : 'menu__item '}>Compétences</li>
                    <li className={selectedItem === 3 ? 'menu__item--selected menu__item ' : 'menu__item '}>Projets</li>
                </ul>
            </nav>
        </header>


    )

}

export default Header