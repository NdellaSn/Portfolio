import Projet from '../Projet/index.jsx'
import './projetsList.scss'
import projetsList from "../../data/projets.js";

function ProjetsList() {
    return (
        <section className='projets section-item' data-item="3" id='projets'>
            <h2 className='section__title'>PROJETS
                <span>Réalisations </span>
            </h2>
            <div className='projets__list'>
                {
                    projetsList.map((projet) => <Projet key={projet.id} data={projet} ></Projet>)
                }


            </div>

        </section>
    )
}

export default ProjetsList