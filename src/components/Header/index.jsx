import './header.scss'
import { useEffect, useState } from 'react';


function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            console.log(window.scrollY )
            if (window.scrollY > 200) {
                setIsScrolled(true);
                document.querySelector('header').classList.add('fade-in')
            } else {
                setIsScrolled(false);
                document.querySelector('header').classList.remove('fade-in')

            }
        }

        window.addEventListener('scroll', handleScroll);

    }, []);



    return (
        <header>
            {
                isScrolled &&
                <nav className='nav__header'>
                    <span className='logo'>MNS</span>
                    <ul className='menu'>
                        <li className='menu__item menu__item--selected'>Accueil</li>
                        <li className='menu__item'>A propos</li>
                        <li className='menu__item'>Compétenses</li>
                        <li className='menu__item'>Projets</li>
                    </ul>
                </nav>
            }
        </header>


    )

}

export default Header