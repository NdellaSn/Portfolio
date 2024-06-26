import './logiciel.scss'

function Logiciel({logo, name}) {
    return (
        <article className='logiciel'>
            <div className='logiciel__bg'>
                <img src={logo} alt={'logiciel '+name}  width="30%" height="100%"/>
            </div>
            <div className='logiciel__cover'>
                <p>{name}</p>
            </div>
        </article>

    )
}
export default Logiciel