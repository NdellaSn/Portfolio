import Welcome from '../../components/Welcome';
import Apropos from '../../components/Apropos';
import './home.scss'
import Competences from '../../components/Competences';
import ProjetsList from '../../components/ProjetsList';
import Contact from '../../components/Contact';

function Home() {


    return (
        <main>
            <Welcome></Welcome>
            <Apropos></Apropos>
            <Competences></Competences>
            <ProjetsList></ProjetsList>
            <Contact></Contact>
        </main>

    )
}
export default Home
