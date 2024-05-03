import './apropos.scss'
import placeholder from '../../assets/images/91372.png'

function Apropos() {
    return (
        <section className='a-propos section-item' data-item="1"  id='a-propos'>
            <h2 className='a-propos__title'>A PROPOS
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

export default Apropos