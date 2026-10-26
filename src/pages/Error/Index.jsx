import './erreur.scss'

export default function Error() {
    return (
        <main className='error wrap'>
            <p className='error__code' aria-hidden="true">404</p>
            <h1>Cette page n'existe pas.</h1>
            <p className='error__text'>L'adresse est peut-être mal saisie, ou la page a été déplacée.</p>
            <a className='btn btn--primary' href="/">Retour à l'accueil</a>
        </main>
    )
}
