import './apropos.scss'
import placeholder from '../../assets/images/mouhamed-ali.webp'

const points = [
    { titre: 'Direction artistique', texte: 'Identités visuelles, supports graphiques et vidéos qui donnent du caractère à une marque.' },
    { titre: 'UX design', texte: 'Recherche utilisateur, parcours et prototypes Figma pour des interfaces simples à utiliser.' },
    { titre: 'Développement front-end', texte: 'Des sites en React et Sass, responsives, accessibles et fidèles aux maquettes.' },
    { titre: 'SEO et IA', texte: "Audits techniques, stratégie de mots-clés et outils d'IA pour gagner en visibilité sur Google." },
]

function Apropos() {
    return (
        <section className='section a-propos' id='a-propos'>
            <div className='wrap'>
                <div className='a-propos__grid'>
                    <div>
                        <div className='section__head'>
                            <h2>À propos</h2>
                        </div>
                        <p className='a-propos__lead'>
                            Je crée des projets web complets, de l'identité visuelle jusqu'au référencement.
                        </p>
                        <p className='a-propos__text'>
                            Formée à la direction artistique, à l'UX design puis au développement front-end, je suis chaque projet du début à la fin : comprendre le public visé, concevoir une interface claire, la développer en React et la rendre visible sur les moteurs de recherche. Aujourd'hui, je me spécialise dans le SEO et l'intelligence artificielle, avec la même attention au détail, à l'accessibilité et aux résultats mesurables.
                        </p>
                        <a className='btn btn--primary' href="#contact">
                            <i className="fa-regular fa-envelope" aria-hidden="true"></i> Me contacter
                        </a>
                    </div>

                    <figure className='a-propos__visuel'>
                        <img src={placeholder} alt="Maquette du site Ali'Ve sur tablette et mobile" width="469" height="263" loading="lazy" />
                    </figure>
                </div>

                <ul className='a-propos__points'>
                    {points.map((point) => (
                        <li key={point.titre}>
                            <h3>{point.titre}</h3>
                            <p>{point.texte}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Apropos
