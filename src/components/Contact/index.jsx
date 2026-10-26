import Coordonnee from '../Coordonnee'
import './contact.scss'
import ContactForm from '../ContactForm'

function Contact() {
    return (
        <section className='section contact' id='contact'>
            <div className='wrap contact__grid'>
                <div>
                    <div className='section__head'>
                        <h2>Contact</h2>
                        <p>Un projet de site, une mission ou une question ? Écrivez-moi.</p>
                    </div>
                    <ul className="coordonnees">
                        <Coordonnee title="Email" donnee="contact@mamendella.fr" href="mailto:contact@mamendella.fr" icon="fa-regular fa-envelope"></Coordonnee>
                        <Coordonnee title="Téléphone" donnee="06 10 03 28 83" href="tel:+33610032883" icon="fa-solid fa-mobile-screen-button"></Coordonnee>
                        <Coordonnee title="Adresse" donnee="95800 Cergy, France" icon="fa-solid fa-location-dot"></Coordonnee>
                    </ul>
                </div>

                <ContactForm></ContactForm>
            </div>
        </section>
    )
}

export default Contact
