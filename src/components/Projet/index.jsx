import './projet.scss'
import cover from '../../assets/images/971.png'

function Projet() {
    return (
        <article className='projet'>
            <div className='projet__cover'>
                <img src={cover} alt="cover projet" />
            </div>
            <div className='projet__footer'>
                <h3 className='projet__footer__title'>Titre de projet </h3>
                <p className='projet__footer__tag'>Developpement web</p>
                <div className='projet__footer__link'>
                <a href="ndellasene.fr" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-circle-plus" ></i></a>
                <a href="ndellasene.fr" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="ndellasene.fr" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-link"></i></a>
                </div>
            </div>
        </article>
    )

}
export default Projet