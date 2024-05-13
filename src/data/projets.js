
import booki from '../assets/images/projets/Booki.webp'
import kasa from '../assets/images/projets/Kasa.webp'
import OhMyFood from '../assets/images/projets/Ohmyfood.webp'
import Print from '../assets/images/projets/Print.webp'
import Nina from '../assets/images/projets/nina.webp'
import argentbank from '../assets/images/projets/argentbank.webp'


const projetsList = [
    {
        "id": "proj-front-nina",
        "name": "Nina Carducci",
        "title": "Nina Carducci",
        "tags": "Référencement SEO",
        "cover": Nina,
        "github": "https://github.com/NdellaSn/Nina",
        "lien": "https://ndellasn.github.io/Nina/",
        "details": {
            "client": "Nina Carducci, jeune photographe professionnelle",
            "présentation": "Nina Carducci, une photographe basée à Bordeaux souhaite améliorer son portfolio pour avoir  une meilleure visibilité ",
            "objectif": "En tant que développeuse freelance, prospecter des clients est important et demande du temps, surtout en début de carrière. Ce projet vous montre quelques bonnes pratiques pour contacter de potentiels clients, et pour décrocher de nouveaux contrats. L’objectif de ce projet était d’ améliorer le site de la jeune phographe pour assurer une meilleure accessibilité, des performances optimisées et un bon référencement SEO. En commençant par par identifier et  corriger les différents problèmes de chargement et de référencement  du site  ensuite j’ ai amélioré  l’accessibilité du site en ajoutant les balises sémantiques.",
            "tags": ['SEO', 'Accessibilité', 'Optimisation'],

        }
    },
    {
        "id": "proj-front-booki",
        "name": "Booki",
        "title": "Booki",
        "tags": "HTML - CSS",
        "cover": booki,
        "github": "https://github.com/NdellaSn/Projet3",
        "lien": "https://ndellasn.github.io/Projet3/",
        "details": {
            "client": "Booki ",
            "présentation": "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            "objectif": "La  mission principale de ce projet est d'intégrer l'interface responsive de leur site. En tant que Developpeuse-Fontend je suis chargé d’intégrer le site en utilisant les maquettes fournis par le client pour mobile, tablette et desktop, ainsi que les images et une note de synthèse sur les spécificités du projet. J’ai crée des composants d'interface avec HTML et CSS afin d'avoir un rendu correspondant à la maquette. J’ai utilisé les flexbox pour être fidèle à la maquette proposée en utilisant le W3S pour la validation du code ",
            "tags": ['figma', 'HTML5', 'CSS3', 'Responsive design'],

        }
    },

    {
        "id": "proj-print-it-js",
        "name": "Print it",
        "title": "Print it",
        "tags": "Java Script",
        "cover": Print,
        "github": "https://github.com/NdellaSn/Print-it-JS",
        "lien": "https://ndellasn.github.io/Print-it-JS/",
        "details": {
            "client": "Print It",
            "présentation": "Print it souhaite dynamiser son site web pour le rendre plus accueillant ",
            "objectif": "Ma mission est d’ explorer les fondamentaux de JavaScript, un langage de programmation clé pour le développement web interactif. J’ai appris  à rendre un site web plus dynamique et engageant en intégrant des fonctionnalités interactives telles qu'un carrousel.J’ai mis à jour le code HTML existant et j’ai ajouter un carrousel en JavaScript avec les Events listerners sur les flêches.Cela m’a permis  de comprendre comment JavaScript interagit avec le HTML et le CSS pour créer des éléments web interactifs. ",
            "tags": ['Débuter en Js'],

        }
    },


    {
        "id": "proj-Kasa",
        "name": "Kasa",
        "title": "Kasa",
        "tags": "REACT",
        "cover": kasa,
        "github": "https://github.com/NdellaSn/Kasa",
        "lien": "https://mns-kasa.netlify.app/",
        "details": {
            "client": "Startup spécialisée dans la location d'appartements entre particuliers",
            "présentation": "Faire la refonte du site en tant que developpeuse Front-end",
            "objectif": "Ma mission est d’ implémenter le front-end de l’application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.Pour gérer l’interaction du site avec l’utilisateur j’ai utilisée des animations CSS avancées: la création d’un carrosse pour afficher les images des logements,  l'implémentation d'un collapse pour améliorer l'UX, et la gestion dynamique des fiches logements à partir de données internes. De plus, j'ai utilisé Sass pour améliorer la gestion des styles ",
            "tags": ['React', 'Node.js', 'Figma', 'Sass', 'Animation Css ', 'Responsive design'],

        }
    },


    {
        "id": "proj-oh-my-food",
        "name": "OhMyFood",
        "title": "OhMyFood",
        "tags": "HTML-CSS",
        "cover": OhMyFood,
        "github": "https://github.com/NdellaSn/OhMyFood",
        "lien": "https://ndellasn.github.io/OhMyFood/",
        "details": {
            "client": "Site de restauration",
            "présentation": "startup qui voudrait s'imposer sur le marché de la restauration",
            "objectif": "L’objectif est d’amener à travailler sur l'interface mobile-first du site  de OhMyFood. J’ai utilisée Sass, pour implémenter des animations CSS et j’ai différent version de mon projet avec Git et GitHub les maquettes pour mobile et desktop, du prototype sur Figma, ainsi que des images et textes nécessaires. Cette approche mobile-first vous permettra de comprendre l'importance de concevoir des sites web adaptatifs et réactifs.",
            "tags": ['figma', 'HTML5', 'Sass', 'Responsive design', 'Animation Css'],

        }
    },



    {
        "id": "proj-ArgentBank",
        "name": "Argent Bank",
        "title": "Argent Bank",
        "tags": "REACT - REDUX",
        "cover": argentbank,
        "github": "https://github.com/NdellaSn/ArgentBank-website",
        "lien": "https://mns-agentbank.netlify.app/",
        "details": {
            "client": "Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.",
            "présentation": "En tant que developpeur Front-end chez Argent Bank, la mission est de gérer l'authentification des utilisateurs avec Json Web Token",
            "objectif": "Transformation d’une base code HTML/CSS en une application React. Intégrer Redux pour la gestion de connexion et les données utilisateurs",
            "tags": ['REACT', 'REDUX', 'Green Code', 'Swagger', 'MongoDB', 'JWT'],

        }
    },
]

export default projetsList