import ProjetCover from '../ProjetCover/index.jsx'
import './projets.scss'
/*  */
import projetsList from "../../data/projets.js";

function Projets() {
    return (
        <section className='projets section-item' data-item="3" id='projets'>
            <h2 className='section__title'>PROJETS
                <span>Réalisations </span>
            </h2>
            <div className='projets__list'>
                
                {
                    /*  */
                    projetsList.map((projet) => <ProjetCover key={projet.id} data={projet} ></ProjetCover>)
                }


            </div>

        </section>
    )
}

export default Projets