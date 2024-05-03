import Welcome from '../../components/Welcome';
import Apropos from '../../components/Apropos';
import './home.scss'
import Competences from '../../components/Competences';

function Home() {


    return (
        <main>
            <Welcome></Welcome>
            <Apropos></Apropos>
            <Competences></Competences>
        </main>

    )
}
export default Home
