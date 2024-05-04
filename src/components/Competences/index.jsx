import Logiciel from '../Logiciel'
import './competences.scss'
import logicielList from "../../data/logiciels.js";

function Competences() {
    return (
        <section className='competences section-item' data-item="2"  id='competences'>
            <h2 className='section__title'>COMPÉTENCES
                <span>Savoir-Faire </span>
            </h2>
            <div className='competences__logiciels'>
                {
                    logicielList.map((logiciel)=> <Logiciel key={logiciel.id} logo={logiciel.logo} name={logiciel.name} ></Logiciel>)
                }
                

            </div>

        </section>
    )
}

export default Competences