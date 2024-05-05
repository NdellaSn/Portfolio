import './projet.scss'

function Projet({ data }) {
    return (
        <article className='projet'>
            <div className='projet__cover'>
                <img src={data.cover} alt="cover projet" />
            </div>
            <div className='projet__footer'>
                <h3 className='projet__footer__title'>{data.title} </h3>
                <p className='projet__footer__tag'>{data.tags}</p>
                <div className='projet__footer__link'>
                    <a href="ndellasene.fr" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-circle-plus" ></i></a>
                    <a href={data.github} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                    {
                        data.lien &&
                        <a href={data.lien} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-link"></i></a>
                    }
                </div>
            </div>
        </article>
    )

}
export default Projet