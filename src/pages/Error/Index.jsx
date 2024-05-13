import errorImg from '../../assets/images/404.gif'
import './erreur.scss'

export default function Error() {

    return (
        <div className='error'>
            <img src={errorImg} alt="Erreur 404" />
            <a className='back__home' href="/">Retour à la page d'accueil</a>
        </div>
    )
}