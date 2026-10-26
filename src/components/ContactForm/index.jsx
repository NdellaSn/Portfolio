import { useRef, useState } from "react"
import './contactfrom.scss'
import sendMail from "../../utils/services/sendMail"

function ContactForm() {
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')
    // 'idle' | 'sending' | 'sent' | 'error'
    const [statut, setStatut] = useState('idle')
    const formulaireData = useRef();

    const valid = prenom !== '' && nom !== '' && mail !== '' && message !== ''

    function onSubmit(e) {
        e.preventDefault();
        setStatut('sending')
        sendMail(formulaireData).then((envoye) => {
            if (envoye) {
                formulaireData.current.reset();
                setPrenom(''); setNom(''); setMail(''); setMessage('');
            }
            setStatut(envoye ? 'sent' : 'error')
        });
    }

    return (
        <form className="form" ref={formulaireData} onSubmit={onSubmit}>
            <div className="form__row">
                <div className='form__field'>
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" name="prenom" autoComplete="given-name" required onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className='form__field'>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" autoComplete="family-name" required onChange={(e) => setNom(e.target.value)} />
                </div>
            </div>
            <div className="form__field">
                <label htmlFor="mail">Email</label>
                <input type="email" id="mail" name="mail" autoComplete="email" required onChange={(e) => setMail(e.target.value)} />
            </div>
            <div className="form__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <div className="form__footer">
                <button className="btn btn--primary" type="submit" disabled={!valid || statut === 'sending'}>
                    {statut === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
                <p className={'form__status form__status--' + statut} role="status">
                    {statut === 'sent' && 'Message envoyé. Je vous réponds au plus vite.'}
                    {statut === 'error' && "Le message n'a pas été envoyé. Réessayez ou écrivez directement à contact@mamendella.fr."}
                </p>
            </div>
        </form>
    )
}

export default ContactForm;
