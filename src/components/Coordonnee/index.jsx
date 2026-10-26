import './coordonnee.scss'

function Coordonnee({ title, donnee, icon, href }) {
    return (
        <li className="coordonnee">
            <i className={icon} aria-hidden="true"></i>
            <div>
                <span className='coordonnee__title'>{title}</span>
                {href ? <a href={href}>{donnee}</a> : <span>{donnee}</span>}
            </div>
        </li>
    )
}

export default Coordonnee;
