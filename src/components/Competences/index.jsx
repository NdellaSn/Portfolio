import './competences.scss'
import placeholder from '../../assets/images/91372.png'

function Competences() {
    return (
        <section className='competences section-item' data-item="2"  id='competences'>
            <h2 className='competences__title'>COMPÉTENCES
                <span>Qui suis-je ?</span>
            </h2>

            <div className='placeholder'>
                <p>
                    Je crée des projets numériques en mettant l'accent sur l'expérience utilisateur, en m'assurant qu'ils répondent aux besoins et aux attentes du public cible défini dans l'étude marketing. Je travaille en étroite collaboration avec les équipes de conception pour aligner le concept du projet sur les personas identifiés, en utilisant une approche de conception centrée sur l'utilisateur. En utilisant la méthode de l'entonnoir, je guide le processus de développement en affinant progressivement les idées pour créer des solutions web qui sont à la fois attrayantes et fonctionnelles pour un large éventail d'utilisateurs, en mettant particulièrement l'accent sur l'inclusion et l'accessibilité.
                </p>
                <img src={placeholder} alt="" />
            </div>

        </section>
    )
}

export default Competences