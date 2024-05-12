import { useState } from "react"
import './contactfrom.scss'

function ContactForm() {
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
        <form className="form" >
            <div className="form__row">
                <div className='form__row__col floating__label'>
                    <input type="text" id="nom" placeholder='' onChange={(e) => { setNom(e.target.value); validateForm() }} />
                    <label className="form__label" htmlFor="nom">Nom</label>
                </div>
                <div className="form__row__col floating__label">
                    <input type="text" id="prenom" placeholder='' onChange={(e) => { setPrenom(e.target.value); validateForm() }} />
                    <label className="form__label" htmlFor="prenom">Prénom</label>
                </div>
            </div>

            <div className="form__row floating__label">
                <input type="email" id="mail" placeholder='' onChange={(e) => { setMail(e.target.value); validateForm() }} />
                <label className="form__label" htmlFor="mail">Email</label>
            </div>
            <div className="form__row floating__label">
                <textarea id="message" placeholder='' onChange={(e) => { setMessage(e.target.value); validateForm() }}></textarea>
                <label className="form__label" htmlFor="message">message</label>
            </div>


            <div className="form__row">
                <button className="form__submit" id="submit-contact" disabled={!valid} onClick={(e) => { onBtnClic(e) }}> Envoyer</button>

            </div>

        </form>
    )
}



export default ContactForm;