import './coordonnee.scss'

function Coordonnee({ title, donnee, icon }) {

    return (
        <div className="coordonnee">
            <div>
                <h3 >{title}</h3>
                <p >{donnee}</p>
            </div>
            <i className={icon}></i>

        </div>
    )

}


export default Coordonnee;