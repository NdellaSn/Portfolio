// Projets UX/UI et direction artistique, repris de https://mns-design.netlify.app/
// Les images sont dans public/projets/<slug>/ (0.jpg = couverture, 1.jpg... = galerie).
// Les vidéos et PDF, trop lourds pour ce site, restent hébergés sur mns-design.

const images = (slug, nombre) => Array.from({ length: nombre }, (_, i) => `${process.env.PUBLIC_URL}/projets/${slug}/${i + 1}.jpg`)
const couverture = (slug) => `${process.env.PUBLIC_URL}/projets/${slug}/0.jpg`
const mnsDesign = (titre, fichier) => `https://mns-design.netlify.app/assets/img/projets/${encodeURIComponent(titre)}/${fichier}`

export const categories = {
    dev: 'Développement',
    web: 'Web design',
    mobile: 'Mobile',
    da: 'Direction artistique',
}

const projetsDesign = [
    {
        id: 'design-uniqka',
        categorie: 'web',
        title: 'Uniqka Design',
        tags: 'Site e-commerce, web design',
        cover: couverture('uniqka-design'),
        lien: 'https://uniqka-design.fr/fr/',
        resume: "Design du site e-commerce d'Uniqka Design, marque parisienne de mobilier en bois massif.",
        description: [
            "Le site présente le catalogue par pièce (salon, salle à manger, chambre, salle de bain, jardin), des ambiances d'intérieur (afro-bohème, maison de campagne, néo déco, bord de mer) et des inspirations shoppables, dans un univers chaleureux autour du bois, du rotin et des tons naturels.",
        ],
        galerie: images('uniqka-design', 2),
    },
    {
        id: 'design-occitane',
        categorie: 'mobile',
        title: 'Occitane',
        tags: 'Application mobile, UX/UI',
        cover: couverture('occitane'),
        resume: "Magic Effects : une application mobile conçue pour répondre aux besoins des utilisateurs de L'Occitane.",
        description: [
            "Le projet part d'un constat : L'Occitane n'avait pas d'application, alors que ses concurrents en proposent déjà une.",
            "L'idée est d'offrir de nombreuses fonctionnalités : commander ses produits, les tester grâce à un filtre, recevoir des suggestions grâce à un diagnostic de peau, et se détendre avec les sons de la nature de Provence dans un espace relaxation.",
            "J'ai mené un atelier d'idéation (Plexcard), puis formulé des hypothèses qui ont servi de base à un questionnaire Google Forms. L'analyse des réponses m'a permis de choisir deux personnes à interviewer pour comprendre leurs attentes en détail, d'établir leur customer journey et de proposer des solutions adaptées à leurs besoins.",
        ],
        outils: ['Adobe XD', 'Google Forms', 'Interviews', 'Customer journey'],
        galerie: images('occitane', 28),
        videos: [mnsDesign('Occitane', '0.mp4'), mnsDesign('Occitane', '1.mp4')],
        pdf: mnsDesign('Occitane', '0.pdf'),
    },
    {
        id: 'design-alive',
        categorie: 'web',
        title: 'Alive',
        tags: 'Site interactif, UX/UI',
        cover: couverture('alive'),
        resume: 'Site interactif retraçant la vie de Muhammad Ali à travers différentes rubriques.',
        description: [
            "Le site propose une expérience participative, inspirante et divertissante autour de la vie de Muhammad Ali, en particulier de ses combats les plus marquants, sur le ring et en dehors.",
        ],
        outils: ['Adobe XD'],
        galerie: images('alive', 5),
        pdf: mnsDesign('Alive', '0.pdf'),
    },
    {
        id: 'design-quiz-anthropocene',
        categorie: 'web',
        title: "Quiz de l'Anthropocène",
        tags: 'Refonte de site, UX/UI',
        cover: couverture('quiz-de-lanthropocene'),
        resume: "Refonte d'une plateforme de quiz sur notre empreinte sur la planète : climat, biodiversité, ressources naturelles.",
        description: [
            "Le site propose des quiz thématiques sur différents aspects de l'impact de l'Homme (l'Anthropocène) : dérèglement du climat, anéantissement du vivant, épuisement des ressources naturelles, artificialisation des espaces naturels. Le contenu est sourcé et provient de bénévoles ou de personnalités.",
            "L'objectif était de faire évoluer le site pour offrir une expérience plus engageante aux visiteurs, avec un design sobre, efficace et une charte graphique mémorable.",
        ],
        listes: [
            {
                titre: 'La cible',
                items: [
                    "Les personnes déjà impliquées dans les questions environnementales.",
                    "Celles qui ne sont pas encore sensibilisées à l'écologie et au réchauffement climatique.",
                ],
            },
            {
                titre: 'Les contraintes',
                items: [
                    'Une refonte graphique du site pour un visuel professionnel et ergonomique.',
                    "De nouvelles fonctionnalités pour sensibiliser, avec une meilleure expérience utilisateur.",
                ],
            },
        ],
        outils: ['Figma'],
        prototype: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoYhcXzVIiXVdCS32ADSyeI%2F%255BPROD%255D-QA%3Ftype%3Ddesign%26node-id%3D697-19077%26scaling%3Dscale-down-width%26page-id%3D646%253A13870%26starting-point-node-id%3D697%253A19077%26hotspot-hints%3D0',
    },
    {
        id: 'design-sentrip',
        categorie: 'web',
        title: 'SenTrip',
        tags: 'Site de voyage, UX/UI',
        cover: couverture('sentrip'),
        resume: 'Site de voyage pour aider les touristes à trouver les meilleures activités au Sénégal.',
        outils: ['Figma'],
        prototype: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fawvez68gB98SnjU7ECBcw2%2FPROD%255BSenTrip%255D%3Ftype%3Ddesign%26node-id%3D2-833%26scaling%3Dscale-down-width%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A833%26hotspot-hints%3D0',
    },
    {
        id: 'design-yoga-paris',
        categorie: 'web',
        title: 'Yoga Paris',
        tags: 'Refonte de site, UI kit',
        cover: couverture('yoga-paris'),
        resume: "Refonte du site YogaParis dans le cadre de l'évolution de sa communication digitale.",
        description: [
            "J'ai été chargée de la refonte du site YogaParis. L'objectif : mettre en avant la disponibilité des cours et améliorer l'expérience utilisateur.",
            "J'ai modernisé le site et proposé des abonnements à des cours à distance, dans le contexte du Covid.",
            "L'audit de l'existant et la recherche d'identité m'ont permis d'identifier les axes d'amélioration, d'y apporter ma touche personnelle et de rendre le site plus ergonomique. J'ai aussi créé un UI kit regroupant les boutons, icônes et autres composants.",
        ],
        outils: ['Adobe XD', 'UI kit'],
        galerie: images('yoga-paris', 5),
        pdf: mnsDesign('Yoga paris', '0.pdf'),
    },
    {
        id: 'design-the-vintedge',
        categorie: 'web',
        title: 'The Vintedge',
        tags: 'Refonte de site, UI',
        cover: couverture('the-vintedge'),
        resume: 'Refonte et modernisation du site en suivant les tendances UI actuelles.',
        description: [
            "J'ai misé sur une structure fine et harmonieuse, avec davantage de couleurs, pour donner vie au design, moderniser le site et permettre aux utilisateurs de trouver rapidement les boutiques ou les articles qu'ils cherchent.",
        ],
        galerie: images('the-vintedge', 4),
    },
    {
        id: 'design-starbucks',
        categorie: 'web',
        title: 'Starbucks',
        tags: 'Refonte de site, UI',
        cover: couverture('starbucks'),
        resume: 'Refonte du site Starbucks Coffee.',
    },
    {
        id: 'design-beco',
        categorie: 'mobile',
        title: 'Beco',
        tags: 'Application mobile, e-commerce',
        cover: couverture('beco'),
        resume: 'Application mobile pour les artisans locaux, conçue pendant la crise du Covid-19 en respectant les codes UI/UX du mobile.',
        description: [
            "Le projet est né de la crise sanitaire et de la demande d'une cliente qui voulait gagner en visibilité.",
            "J'ai créé une marque dédiée à la vente de masques barrières, ainsi qu'un site e-commerce qui facilite l'accès à la protection pour tous, dans le respect de l'environnement, en soutenant les artisans, l'économie locale et le lien social.",
        ],
        outils: ['Adobe XD'],
        galerie: images('beco', 12),
        videos: [mnsDesign('Beco', '0.mp4')],
        pdf: mnsDesign('Beco', '0.pdf'),
    },
    {
        id: 'design-casa-de-papel',
        categorie: 'da',
        title: 'Générique La Casa de Papel',
        tags: 'Motion design',
        cover: couverture('generique-casa-de-papel'),
        resume: 'Conception et réalisation du générique de la série La Casa de Papel, d\'une durée de 55 secondes.',
        description: [
            "Il fallait trouver un concept et un scénario précis pour le générique de la série, en intégrant les noms des acteurs au motion design.",
            "Mon concept : le temps, c'est de l'argent.",
        ],
    },
    {
        id: 'design-lego-history',
        categorie: 'da',
        title: 'Lego History',
        tags: 'Musée virtuel, direction artistique',
        cover: couverture('lego-history'),
        resume: "Revivre l'histoire de Lego : un musée virtuel interactif qui retrace l'histoire de la marque.",
        pdf: mnsDesign('Lego History', '0.pdf'),
    },
    {
        id: 'design-beyown',
        categorie: 'da',
        title: 'Beyown',
        tags: 'Jeux, direction artistique',
        cover: couverture('beyown'),
        resume: 'Série de mini-jeux sur le thème du développement personnel.',
        pdf: mnsDesign('Beyown', '0.pdf'),
    },
]

export default projetsDesign
