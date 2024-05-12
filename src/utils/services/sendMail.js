import emailjs from '@emailjs/browser';

const sendMail = async (formulaire) => {
    return emailjs.sendForm('service_eszdf7d', 'template_kbrp8jb', formulaire.current, { publicKey: "wXtaz09YgMfKEOWBD", }).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            return true;
        },
        (error) => {
            console.log('FAILED...', error);
            return false;
        },
    )
}


export function displayMessage(sent) {

    let __class = '.mail__error';
    if (sent) {
        __class = '.mail__success'
    }

    document.querySelector(__class).style.display = 'block'
    setTimeout(() => {
        document.querySelector(__class).style.display = 'none'
    }, 3000)


}
export default sendMail