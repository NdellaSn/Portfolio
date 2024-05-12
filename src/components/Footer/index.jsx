import './footer.scss'
import logo from '../../assets/images/logo/logo-blanc.png'
function Footer() {


    return (
        <footer>
            <img src={logo} alt='logo' className='footer__logo' />
            <ul className='nav__footer'>
                <li><a href="#welcome">Accueil</a></li>
                <li><a href="#a-propos">A propos</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
            <div className='footer_reseau'>
                <span>
                    <button className='dark__mode__btn'> <i className="fa-solid fa-moon"></i></button>
                </span>
                <div className='footer__link'>
                    <a href="https://www.linkedin.com/in/mame-ndella-sene-0123321a5/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/NdellaSn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:contact@mamendella.fr" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-envelope"></i></a>
                    <a href="../../assets/mame-ndella-sene.pdf" download="mame-ndella-sene.pdf"><i className="fa-regular fa-file-pdf"></i></a>
                </div>
                <span className='footer__copyright'> © 2024 Mame Ndella SENE</span>

            </div>

        </footer>
    )

}

export default Footer