import './projetdetails.scss'
import printDetail from '../../assets/images/projets/printDetail.png'


function Projetdetails({ data }) {

    return (
        <div className='details'>
            <div className='details__cover'>
                <img src={data.cover} alt='printdetail' />

            </div>
            <div className="details__body">

                <h4 className='details__body__title'>  {data.title} </h4>

                <h5 className='details__body__subtitle'>Client: <span> {data.details.client} </span></h5>
                
                <h5 className='details__body__subtitle'>Présentation:</h5>
                <p> {data.details.présentation}</p>
                <h5 className='details__body__subtitle'>Objectif:</h5>
                <p> {data.details.objectif} </p>
                <div className='details__body__block'>

                    {
                        data.details.tags.map(
                            (tag )=> <button key={tag} className='details__body__block__tags' title={'Tag '+tag} >{tag}</button>
                    )
                    }


                </div>
            </div>




        </div>
    )
}

export default Projetdetails;