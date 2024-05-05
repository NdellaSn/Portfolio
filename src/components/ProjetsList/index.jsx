import Projet from '../Projet/index.jsx'
import './projetsList.scss'
import logicielList from "../../data/logiciels.js";

function ProjetsList() {
    return (
        <section className='projets section-item' data-item="2"  id='projets'>
            <h2 className='section__title'>PROJETS
                <span>Réalisations </span>
            </h2>
            <div className='projets__logiciels'>
                {
                    logicielList.map((logiciel)=> <Projet key={logiciel.id} ></Projet>)
                }
                

            </div>

        </section>
    )
}

export default ProjetsList