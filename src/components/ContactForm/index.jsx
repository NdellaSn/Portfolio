import { useEffect, useState } from "react"
import './contactfrom.scss'
import { useRef } from "react"
import sendMail, { displayMessage } from "../../utils/services/sendMail"
import loading from '../../assets/images/lg.gif'

function ContactForm() {
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')
    
    const [valid, setValid] = useState(false)
    const formulaireData = useRef();

    useEffect(() => {
        setValid(prenom !== '' && nom !== '' && mail !== '' && message !== '')

    }, [prenom, nom, mail, message])


    //  renseigner le formulaire et cliquer sur le bnt envoyer le message
    function onBtnClic(e) {
        e.preventDefault();
        // afficher le chargement de l'envoi 
        document.getElementById("loader").style.display = "block"
        // envoi le mail 
        sendMail(formulaireData).then((reponse) => {
            // des qu'on recois la reponse on affiche un message en fonction de response recue
            document.getElementById("loader").style.display = "none"
            formulaireData.current.reset();
            displayMessage(reponse);
        }
        )
            ;


    }

    return (
        <form className="form" ref={formulaireData} >
            <div className="loader" id="loader"><img src={loading} alt="loader " /></div>
            <div className="form__row">
                <div className='form__row__col floating__label'>
                    <input type="text" id="nom" placeholder='' name="nom" onChange={(e) => { setNom(e.target.value); }} />
                    <label className="form__label" htmlFor="nom">Nom</label>
                </div>
                <div className="form__row__col floating__label">
                    <input type="text" id="prenom" name="prenom" placeholder='' onChange={(e) => { setPrenom(e.target.value); }} />
                    <label className="form__label" htmlFor="prenom">Prénom</label>
                </div>
            </div>

            <div className="form__row floating__label">
                <input type="email" id="mail" name="mail" placeholder='' onChange={(e) => { setMail(e.target.value); }} />
                <label className="form__label" htmlFor="mail">Email</label>
            </div>
            <div className="form__row floating__label">
                <textarea id="message" name="message" placeholder='' onChange={(e) => { setMessage(e.target.value); }}></textarea>
                <label className="form__label" htmlFor="message">message</label>
            </div>


            <div className="form__row">
                <button className="form__submit" id="submit-contact" disabled={!valid} onClick={(e) => { onBtnClic(e) }}> Envoyer</button>
                <p className="mail__success">Votre message a été envoyé avec succès.</p>
                <p className="mail__error">Votre message n'a pas pu être envoyé. Nous nous excusons pour le désagrément.</p>
            </div>

        </form>
    )
}



export default ContactForm;