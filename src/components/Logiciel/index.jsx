import './logiciel.scss'

function Logiciel({ logo, name }) {
    return (
        <li className={logo ? 'logiciel' : 'logiciel logiciel--texte'}>
            {logo &&
                <span className='logiciel__logo'>
                    <img src={logo} alt="" width="28" height="28" loading="lazy" />
                </span>
            }
            {name}
        </li>
    )
}
export default Logiciel
