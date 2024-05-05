import { useEffect } from 'react';
import bg from '../../assets/images/971.png'
import './welcome.scss'

function Welcome() {

    useEffect(() => {
        setTimeout(type, 1000)

    })

    return (
        <div className='welcome section-item' data-item="0" id='welcome'>
            <img className='welcome__img' src={bg} alt='background bienvenu' />
            <div className='welcome__bloc__title'>
                <h1 className='letter-by-letter' >
                    <p className='hello'> Hello !</p>
                    <span id='presentation'></span>
                    <span className='tap-bar'>|</span>

                </h1>
            </div>
            <div className='welcome__down__page'>
            <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div className='welcome__cover'></div>
        </div>
    )
}

export default Welcome;
let index = 0;
let indexPhrase = 0
const text = ["Je suis Mame Ndella SENE.", "Je suis Développeuse Frontend."]



function type() {
    const phrase = text[indexPhrase];
    if (indexPhrase >= text.length)
        return
    if (indexPhrase === 0 && index === 0) {
        document.getElementById("presentation").innerHTML = "";
    }
    if (index < phrase.length) {
        document.getElementById("presentation").innerHTML += phrase.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed (milliseconds)
    }
    else {
        index = 0;
        indexPhrase++
        document.getElementById("presentation").innerHTML += indexPhrase < text.length ? "<br/>" : "";
        setTimeout(type, 3000)

    }


}