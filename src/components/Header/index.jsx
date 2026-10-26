import './header.scss'
import { useEffect, useState } from 'react';
import logo_noir from '../../assets/images/logo/logo-noir.png'
import logo_blanc from '../../assets/images/logo/logo-blanc.png'
import { Link } from 'react-router-dom';

const liens = [
    { id: 'a-propos', label: 'À propos' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'contact', label: 'Contact' },
]

function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [sectionActive, setSectionActive] = useState('');
    const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');

    // met en avant le lien de la section visible
    useEffect(() => {
        const sections = liens.map((lien) => document.getElementById(lien.id)).filter(Boolean);
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setSectionActive(entry.target.id);
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) { }
    }, [theme]);

    useEffect(() => {
        document.body.style.overflow = menuOuvert ? 'hidden' : '';
    }, [menuOuvert]);

    return (
        <header className='header'>
            <div className='wrap header__inner'>
                <Link to="/" className='header__logo' onClick={() => setMenuOuvert(false)}>
                    <img className='logo--noir' src={logo_noir} alt="Mame Ndella, accueil" width="44" height="46" />
                    <img className='logo--blanc' src={logo_blanc} alt="" width="44" height="46" />
                </Link>

                <nav className={menuOuvert ? 'nav nav--open' : 'nav'} id='nav-menu' aria-label='Navigation principale'>
                    <ul className='nav__list'>
                        {liens.map((lien) => (
                            <li key={lien.id}>
                                <a
                                    href={'/#' + lien.id}
                                    className={sectionActive === lien.id ? 'nav__link nav__link--active' : 'nav__link'}
                                    aria-current={sectionActive === lien.id ? 'true' : undefined}
                                    onClick={() => setMenuOuvert(false)}
                                >
                                    {lien.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='header__actions'>
                    <button
                        className='icon-btn'
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
                    >
                        <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} aria-hidden="true"></i>
                        <span className='visually-hidden'>{theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}</span>
                    </button>
                    <button
                        className='icon-btn header__burger'
                        onClick={() => setMenuOuvert(!menuOuvert)}
                        aria-expanded={menuOuvert}
                        aria-controls='nav-menu'
                    >
                        <i className={menuOuvert ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true"></i>
                        <span className='visually-hidden'>{menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
