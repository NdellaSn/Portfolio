import './footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <div className='wrap footer__inner'>
                <p className='footer__copyright'>© {new Date().getFullYear()} Mame Ndella Sène</p>
                <ul className='footer__link'>
                    <li><a href="https://www.linkedin.com/in/mame-ndella-sene-0123321a5/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/NdellaSn" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="/mame-ndella-sene.pdf" download="mame-ndella-sene.pdf">CV (PDF)</a></li>
                    <li><a href="#welcome">Haut de page</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
