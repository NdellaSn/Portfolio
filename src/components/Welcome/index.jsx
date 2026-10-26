import './welcome.scss'

function Welcome() {
    return (
        <section className='welcome' id='welcome'>
            <div className='wrap welcome__inner'>
                <div className='welcome__text'>
                    <h1 className='welcome__name'>
                        <span>Mame</span>
                        <span>Ndella</span>
                        <span>Sène.</span>
                    </h1>
                    <p className='welcome__intro'>
                        Du design à la mise en ligne : j'imagine l'identité visuelle, je conçois l'expérience utilisateur, je développe le site et je le rends visible sur Google.
                    </p>
                    <div className='welcome__actions'>
                        <a className='btn btn--primary' href="#projets">Voir mes projets</a>
                        <a className='btn btn--secondary' href="mame-ndella-sene.pdf" download="mame-ndella-sene.pdf">
                            <i className="fa-regular fa-file-pdf" aria-hidden="true"></i> Télécharger mon CV
                        </a>
                    </div>
                    <ul className='welcome__social'>
                        <li><a href="https://www.linkedin.com/in/mame-ndella-sene-0123321a5/" target="_blank" rel="noopener noreferrer" title='LinkedIn'><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i><span className='visually-hidden'>LinkedIn</span></a></li>
                        <li><a href="https://github.com/NdellaSn" target="_blank" rel="noopener noreferrer" title='GitHub'><i className="fa-brands fa-github" aria-hidden="true"></i><span className='visually-hidden'>GitHub</span></a></li>
                        <li><a href="mailto:contact@mamendella.fr" title='contact@mamendella.fr'><i className="fa-regular fa-envelope" aria-hidden="true"></i><span className='visually-hidden'>Email</span></a></li>
                    </ul>
                </div>

                {/* les deux arches reprennent le « m » du logo */}
                <div className='welcome__arches' aria-hidden="true">
                    <span className='arch arch--1'></span>
                    <span className='arch arch--2'></span>
                </div>
            </div>
        </section>
    )
}

export default Welcome;
