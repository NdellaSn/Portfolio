import Logiciel from '../Logiciel'
import './competences.scss'
import logicielList from "../../data/logiciels.js";

const groupes = [
    { id: 'dev', titre: 'Développement' },
    { id: 'ux', titre: 'UX design' },
    { id: 'design', titre: 'Design, vidéo et outils' },
]

function Competences() {
    return (
        <section className='section competences' id='competences'>
            <div className='wrap'>
                <div className='section__head'>
                    <h2>Compétences</h2>
                    <p>Les méthodes et les outils que j'utilise, de la recherche utilisateur jusqu'à la mise en ligne.</p>
                </div>

                <div className='competences__groupes'>
                    {groupes.map((groupe) => (
                        <div className='competences__groupe' key={groupe.id}>
                            <h3>{groupe.titre}</h3>
                            <ul className='competences__logiciels'>
                                {logicielList
                                    .filter((logiciel) => logiciel.groupe === groupe.id)
                                    .map((logiciel) => <Logiciel key={logiciel.id} logo={logiciel.logo} name={logiciel.name}></Logiciel>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Competences
