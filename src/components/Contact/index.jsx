import { useState } from 'react'
import Coordonnee from '../Coordonnee'
import './contact.scss'
//import sendEmail from '../../utils/services/sendMail'

function Contact({ setIsOpen }) {
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')
    const [valid, setValid] = useState(false)

    function validateForm() {

        setValid(prenom !== '' && nom !== '' && mail !== '' && message !== '')
    }

    function onBtnClic(e) {
        e.preventDefault();
        console.log(prenom);
        console.log(nom);
        console.log(mail);
        console.log(message);
        const mailBody = "Bonjour,Vous venez de recevoir un mail de la part de "
            + prenom + ' ' + nom + ' : ' + message;

        //sendEmail(mailBody, mail);


    }

    return (
        <div className='contact'>
            <div className='contact__header'>
                <h3 className='contact__header__title'>Contact</h3>
                <button className='contact__header__close' onClick={() => setIsOpen(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

            </div>

            <div className='contact__body'>
                <div className="coordonnees">
                    <Coordonnee title="Mon adresse" donnee="95800 CERGY, FRANCE" icon="fa-solid fa-location-dot" ></Coordonnee>
                    <Coordonnee title="Tel" donnee="06 10 03 28 83" icon="fa-solid fa-mobile-screen-button" ></Coordonnee>
                    <Coordonnee title="Mail" donnee="contact@mamendella.fr" icon="fa-regular fa-envelope" ></Coordonnee>
                </div>

                <form className="form" >
                    <div className="form__row">
                        <div className='form__row__col floating__label'>
                            <input type="text" id="nom" placeholder='' onChange={(e) => { setNom(e.target.value); validateForm() }} />
                            <label className="form__label" for="nom">Nom</label>
                        </div>
                        <div className="form__row__col floating__label">
                            <input type="text" id="prenom" placeholder='' onChange={(e) => { setPrenom(e.target.value); validateForm() }} />
                            <label className="form__label" for="prenom">Prénom</label>
                        </div>
                    </div>

                    <div className="form__row floating__label">
                        <input type="email" id="mail" placeholder='' onChange={(e) => { setMail(e.target.value); validateForm() }} />
                        <label className="form__label" for="mail">Email</label>
                    </div>
                    <div className="form__row floating__label">
                        <textarea id="message" placeholder='' onChange={(e) => { setMessage(e.target.value); validateForm() }}></textarea>
                        <label className="form__label" for="message">message</label>
                    </div>


                    <div className="form__row">
                        <button className="form__submit" id="submit-contact" disabled={!valid} onClick={(e) => { onBtnClic(e) }}> Envoyer</button>

                    </div>

                </form>
            </div >

        </div >
    )

}

export default Contact