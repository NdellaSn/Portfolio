import './parcours.scss'

// Contenu repris du CV (CV_Mame_Ndella_Sene_SEO_IA)
const experiences = [
    {
        poste: 'Développeuse front-end',
        structure: 'Wyse Academy, stage',
        dates: '2025',
        mission: 'Optimisation de la performance technique et du SEO on-page',
        texte: "Audits techniques (robots.txt, sitemap, balisage HTML) sur plus de 5 applications web.",
        resultats: ['+35 % de vitesse de chargement (Core Web Vitals)', '+20 % de trafic organique sur les pages clés'],
    },
    {
        poste: "Projets d'étude",
        structure: 'OpenClassrooms',
        dates: '2023 – 2024',
        mission: 'Audits SEO et accessibilité (WCAG, RGAA)',
        texte: "Refonte de l'arborescence et intégration responsive sur 8 projets d'entraînement.",
        resultats: ['Scores Lighthouse supérieurs à 95/100 en accessibilité et en SEO technique'],
    },
    {
        poste: 'UX designer',
        structure: 'SASU Perfect, Argenteuil, alternance',
        dates: '2022',
        mission: 'Conception de parcours UX et optimisation de la conversion (SXO)',
        texte: "Refonte complète des parcours utilisateurs et des maquettes Figma de l'offre de formation.",
        resultats: ['−15 % de taux de rebond', '+25 % de prises de contact'],
    },
    {
        poste: 'Directrice artistique multimédia',
        structure: 'SASU Perfect, alternance',
        dates: '2021',
        mission: 'Création de contenus multimédias et branding',
        texte: "Production de plus de 20 supports visuels et vidéos d'engagement.",
        resultats: ['+40 % de portée organique sur les réseaux sociaux'],
    },
]

const formations = [
    {
        titre: 'Bachelor Consultante SEO et intelligence artificielle',
        niveau: 'Bac+3, titre RNCP niveau 6',
        ecole: 'THE BRIDGE École-Entreprises',
        dates: '2026 – 2027',
        texte: 'Audits techniques, stratégie sémantique, netlinking, outils SEO (SEMrush, Screaming Frog, Google Search Console), automatisation par IA et SXO.',
    },
    {
        titre: 'Développeuse front-end',
        niveau: 'titre RNCP niveau 5',
        ecole: 'OpenClassrooms',
        dates: '2023 – 2024',
        texte: "Conception d'interfaces web modernes et responsives. Projets concrets en HTML, CSS, JavaScript, React et Sass. Veille technologique et approche UX/UI.",
    },
    {
        titre: 'Directeur artistique',
        niveau: 'titre RNCP niveau 6',
        ecole: "L'École Multimédia de Paris",
        dates: 'Déc. 2021 – déc. 2022',
        texte: 'Direction artistique de projets numériques : concevoir des propositions graphiques créatives et innovantes, piloter un budget et un planning, mener une veille créative.',
    },
    {
        titre: 'UX design',
        niveau: 'titre RNCP niveau 6',
        ecole: "L'École Multimédia de Paris",
        dates: 'Déc. 2020 – déc. 2021',
        texte: 'Recherche UX et conception de parcours utilisateurs.',
    },
    {
        titre: 'Web design',
        niveau: 'titre RNCP niveau 5',
        ecole: "L'École Multimédia de Paris",
        dates: 'Mars 2020 – déc. 2020',
        texte: 'Analyser les besoins des clients, rechercher des solutions graphiques et ergonomiques pour le web, décliner une identité graphique sur des supports interactifs.',
    },
]

function Parcours() {
    return (
        <section className='section parcours' id='parcours'>
            <div className='wrap'>
                <div className='section__head'>
                    <h2>Parcours</h2>
                    <p>Avant le développement front-end, j'ai travaillé le design, la vidéo et l'expérience utilisateur. C'est ce qui guide aujourd'hui ma façon de coder.</p>
                </div>

                <div className='parcours__grid'>
                    <div>
                        <h3 className='parcours__titre'>Expériences</h3>
                        <ol className='parcours__list'>
                            {experiences.map((xp) => (
                                <li key={xp.poste + xp.dates}>
                                    <span className='parcours__dates'>{xp.dates}</span>
                                    <h4>{xp.poste}</h4>
                                    <p className='parcours__structure'>{xp.structure}</p>
                                    <p><strong>{xp.mission}.</strong> {xp.texte}</p>
                                    <ul className='parcours__resultats'>
                                        {xp.resultats.map((resultat) => <li key={resultat}>{resultat}</li>)}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <h3 className='parcours__titre'>Formations</h3>
                        <ol className='parcours__list'>
                            {formations.map((formation) => (
                                <li key={formation.titre}>
                                    <span className='parcours__dates'>{formation.dates}</span>
                                    <h4>{formation.titre}</h4>
                                    <p className='parcours__structure'>{formation.ecole}, {formation.niveau}</p>
                                    <p>{formation.texte}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Parcours
