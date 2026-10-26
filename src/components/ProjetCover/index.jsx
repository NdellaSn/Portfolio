import { useState } from 'react';
import Modal from 'react-modal';
import './projetcover.scss'
import './modal.scss'
import Projetdetails from '../ProjetDetails';
import { categories } from '../../data/projetsDesign';

Modal.setAppElement('#root');

function ProjetCover({ data }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <li className='projet'>
            <div className='projet__cover'>
                <img src={data.cover} alt="" loading="lazy" />
                <span className='projet__categorie'>{categories[data.categorie]}</span>
            </div>
            <div className='projet__info'>
                <div>
                    <h3 className='projet__title'>
                        {/* le bouton couvre toute la carte (voir ::after) */}
                        <button className='projet__open' onClick={() => setIsOpen(true)}>
                            {data.title}
                        </button>
                    </h3>
                    <p className='projet__tag'>{data.tags}</p>
                </div>
                <div className='projet__links'>
                    {data.github &&
                        <a href={data.github} target="_blank" rel="noopener noreferrer" title={'Code de ' + data.title + ' sur GitHub'}>
                            <i className="fa-brands fa-github" aria-hidden="true"></i>
                            <span className='visually-hidden'>Code de {data.title} sur GitHub</span>
                        </a>
                    }
                    {data.lien &&
                        <a href={data.lien} target="_blank" rel="noopener noreferrer" title={'Voir le site ' + data.title}>
                            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                            <span className='visually-hidden'>Voir le site {data.title}</span>
                        </a>
                    }
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                className='modal'
                overlayClassName='modal__overlay'
                bodyOpenClassName='modal-open'
                contentLabel={'Projet ' + data.title}
            >
                <button onClick={() => setIsOpen(false)} className='modal__close icon-btn'>
                    <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    <span className='visually-hidden'>Fermer</span>
                </button>
                <Projetdetails data={data}></Projetdetails>
            </Modal>
        </li>
    )
}
export default ProjetCover
