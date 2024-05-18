import './footer.scss'
import logo from '../../assets/images/logo/logo-blanc.png'
import { useEffect, useState } from 'react'
function Footer() {
    const [dark, setMode] = useState(false);

    useEffect(() => {
        if (dark) {
            document.getElementById('root').classList.add('dark');
        } else {
            document.getElementById('root').classList.remove('dark');
        }
    }, [dark]);

    return (
        <footer>
            <img src={logo} alt='logo de mon site' className='footer__logo' width="5%" height="100%" />
            <ul className='nav__footer'>
                <li><a href="#welcome">Accueil</a></li>
                <li><a href="#a-propos">A propos</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
            <div className='footer_reseau'>
                <span>
                    <button className='dark__mode__btn' title='mode dark' onClick={() => setMode(!dark)}>
                        {!dark && <i className="fa-solid fa-moon icon--dark"></i>}
                        {dark && <i className="fa-solid fa-sun icon--light"></i>}
                    </button>
                </span>
                <div className='footer__link'>
                    <a href="https://www.linkedin.com/in/mame-ndella-sene-0123321a5/" target="_blank" title='lien linkedin' rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/NdellaSn" target="_blank" title='lien github' rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:contact@mamendella.fr" target="_blank" title='mon adresse email' rel="noopener noreferrer"><i className="fa-regular fa-envelope"></i></a>
                    <a href="mame-ndella-sene.pdf" download="mame-ndella-sene.pdf" title='mon cv'><i className="fa-regular fa-file-pdf" title='télécharger mon cv au format pdf'></i></a>
                </div>
                <span className='footer__copyright'> © 2024 Mame Ndella SENE</span>

            </div>

        </footer>
    )

}

export default Footer