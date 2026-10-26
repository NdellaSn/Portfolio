import Welcome from '../../components/Welcome';
import Apropos from '../../components/Apropos';
import './home.scss'
import Competences from '../../components/Competences';
import Projets from '../../components/Projets';
import Parcours from '../../components/Parcours';
import Contact from '../../components/Contact';

function Home() {
    return (
        <main>
            <Welcome></Welcome>
            <Apropos></Apropos>
            <Projets></Projets>
            <Competences></Competences>
            <Parcours></Parcours>
            <Contact></Contact>
        </main>
    )
}
export default Home
