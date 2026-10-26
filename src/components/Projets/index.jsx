import { useState } from 'react'
import ProjetCover from '../ProjetCover/index.jsx'
import './projets.scss'
import projetsList from "../../data/projets.js";
import projetsDesign, { categories } from "../../data/projetsDesign.js";

const tousLesProjets = [...projetsList, ...projetsDesign]

const filtres = [
    { id: 'tous', label: 'Tous' },
    ...Object.entries(categories).map(([id, label]) => ({ id, label })),
]

function Projets() {
    const [filtre, setFiltre] = useState('tous')

    const projets = filtre === 'tous' ? tousLesProjets : tousLesProjets.filter((projet) => projet.categorie === filtre)

    return (
        <section className='section projets' id='projets'>
            <div className='wrap'>
                <div className='section__head'>
                    <h2>Projets</h2>
                    <p>Une sélection de projets en développement, UX design et direction artistique : sites React, refontes optimisées pour le SEO, applications mobiles, prototypes et motion design.</p>
                </div>

                <div className='projets__filtres' role='group' aria-label='Filtrer les projets'>
                    {filtres.map((f) => {
                        const nombre = f.id === 'tous' ? tousLesProjets.length : tousLesProjets.filter((p) => p.categorie === f.id).length
                        return (
                            <button
                                key={f.id}
                                className={filtre === f.id ? 'filtre filtre--actif' : 'filtre'}
                                aria-pressed={filtre === f.id}
                                onClick={() => setFiltre(f.id)}
                            >
                                {f.label} <span className='filtre__nombre'>{nombre}</span>
                            </button>
                        )
                    })}
                </div>

                <ul className='projets__list'>
                    {projets.map((projet) => <ProjetCover key={projet.id} data={projet}></ProjetCover>)}
                </ul>
            </div>
        </section>
    )
}

export default Projets
