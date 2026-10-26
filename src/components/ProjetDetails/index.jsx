import './projetdetails.scss'

// Deux formes de données : les projets de développement (data.details)
// et les projets de design (resume, description, galerie, prototype...).
function Projetdetails({ data }) {
    const details = data.details
    const tags = details ? details.tags : data.outils
    const aDesMedias = data.prototype || data.videos || data.galerie

    return (
        <article className='details'>
            <div className='details__top'>
                <div className='details__cover'>
                    <img src={data.cover} alt={'Aperçu du projet ' + data.title} />
                </div>
                <div className="details__body">
                    <h2 className='details__title'>{data.title}</h2>

                    {details ? (
                        <dl className='details__infos'>
                            <dt>Client</dt>
                            <dd>{details.client}</dd>
                            <dt>Présentation</dt>
                            <dd>{details.présentation}</dd>
                            <dt>Objectif</dt>
                            <dd>{details.objectif}</dd>
                        </dl>
                    ) : (
                        <div className='details__texte'>
                            <p className='details__resume'>{data.resume}</p>
                            {data.description && data.description.map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}
                            {data.listes && data.listes.map((liste) => (
                                <div key={liste.titre}>
                                    <h3>{liste.titre}</h3>
                                    <ul>
                                        {liste.items.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {tags && tags.length > 0 &&
                        <ul className='details__tags'>
                            {tags.map((tag) => <li key={tag}>{tag}</li>)}
                        </ul>
                    }

                    <div className='details__actions'>
                        {data.lien &&
                            <a className='btn btn--primary' href={data.lien} target="_blank" rel="noopener noreferrer">Voir le site</a>
                        }
                        {data.github &&
                            <a className='btn btn--secondary' href={data.github} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github" aria-hidden="true"></i> Voir le code
                            </a>
                        }
                        {data.pdf &&
                            <a className='btn btn--secondary' href={data.pdf} target="_blank" rel="noopener noreferrer">
                                <i className="fa-regular fa-file-pdf" aria-hidden="true"></i> Dossier du projet (PDF)
                            </a>
                        }
                    </div>
                </div>
            </div>

            {aDesMedias &&
                <div className='details__medias'>
                    {data.prototype &&
                        <div className='details__prototype'>
                            <h3>Prototype interactif</h3>
                            <iframe src={data.prototype} title={'Prototype Figma de ' + data.title} loading="lazy" allowFullScreen></iframe>
                        </div>
                    }
                    {data.videos &&
                        <div className='details__videos'>
                            <h3>{data.videos.length > 1 ? 'Vidéos' : 'Vidéo'}</h3>
                            <div className='details__videos__list'>
                                {data.videos.map((video) => <video key={video} src={video} controls preload="metadata" playsInline></video>)}
                            </div>
                        </div>
                    }
                    {data.galerie &&
                        <div className='details__galerie'>
                            <h3>Maquettes</h3>
                            <div className='details__galerie__grid'>
                                {data.galerie.map((image, index) => (
                                    <img key={image} src={image} alt={'Maquette ' + (index + 1) + ' du projet ' + data.title} loading="lazy" />
                                ))}
                            </div>
                        </div>
                    }
                </div>
            }
        </article>
    )
}

export default Projetdetails;
