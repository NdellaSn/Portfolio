import Coordonnee from '../Coordonnee'
import './contact.scss'
import ContactForm from '../ContactForm'

function Contact() {


    return (
        <section className='contact section-item' data-item="4" id='contact'>
            <h2 className='section__title'>Contact
                <span>Contacter</span>
            </h2>

            <div className='contact__body'>
                <div className="coordonnees">
                    <Coordonnee title="Mon adresse" donnee="95800 CERGY, FRANCE" icon="fa-solid fa-location-dot" ></Coordonnee>
                    <Coordonnee title="Tel" donnee="06 10 03 28 83" icon="fa-solid fa-mobile-screen-button" ></Coordonnee>
                    <Coordonnee title="Mail" donnee="contact@mamendella.fr" icon="fa-regular fa-envelope" ></Coordonnee>
                </div>

                <ContactForm></ContactForm>

            </div >

        </section >
    )

}

export default Contact