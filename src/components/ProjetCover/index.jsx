import { useState } from 'react';
import Modal from 'react-modal';
import './projetcover.scss'
import './modal.scss'
import Projetdetails from '../ProjetDetails';

Modal.setAppElement('#root');

function ProjetCover({ data }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
            <article className='projet' onClick={() => { setIsOpen(true); console.log(modalIsOpen) }}>
                <div className='projet__cover'>
                    <img src={data.cover} alt={"couverture projet " + data.title} />
                </div>
                <div className='projet__footer'>
                    <h3 className='projet__footer__title'>{data.title} </h3>
                    <p className='projet__footer__tag'>{data.tags}</p>
                    <div className='projet__footer__link'>
                        <button onClick={() => setIsOpen(true)} title="voir le projet" ><i className="fa-solid fa-circle-plus"  ></i></button>
                        <a href={data.github} target="_blank" rel="noopener noreferrer" title="projet github"><i className="fa-brands fa-github"></i></a>
                        {
                            data.lien &&
                            <a href={data.lien} target="_blank" rel="noopener noreferrer" title="lien du projet"><i className="fa-solid fa-link"></i></a>
                        }
                    </div>
                </div>
            </article>
            <Modal isOpen={modalIsOpen}>
                <div className="modal__header">
                    <button onClick={() => setIsOpen(false)} className='btn__close' title='fermeture pop-up'>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <Projetdetails data={data}></Projetdetails>
            </Modal>
        </>

    )

}
export default ProjetCover