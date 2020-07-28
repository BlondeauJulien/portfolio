import { marmibonImagesArray, dartAppImagesArray, learnAppImagesArray } from '../images/utils/imageExporter';

const learnapp = {
  images: learnAppImagesArray,
  title: 'Learn language (flashcards & quizzes)',
  FR: {
    appType: "Application Web Front End",
    frontend: "Front End avec: HTML, CSS, Javascript ES6, React.",
    backend: "Back End avec: NodeJS, mongoDB.",
    test: "API écrite en développement par le test avec jest. Front-end testé avec react-testing-library et jest.",
    responsive: "Responsive tablette et mobile.",
    keyFeaturesTitle: 'Fonctionnalités clés',
    keyFeatures: [
      "Création, édition et suppression de compte.",
      "Création, édition et suppression de cours, mots et quiz.",
      "Révision de vocabulaire avec un petit algorithme qui permet de revoir plus souvent les mots avec lesquels on a du mal.",
      "Administrateurs et moderateurs panel (ban utilisateur, supprimer cours, images...)."
    ],
    aboutTitle: 'À propos',
    about: [
      `
        Après avoir commencé à apprendre le norvégien et utilisé plusieurs applications d'apprentissage de langue j'ai pensé que 
        créer ma propros petite application pourrait faire un bon projet portfolio. J'avais aussi envie d'un projet qui permette 
        l'implementation de plusieurs rôles (Administrateurs, modérateurs et utilisateurs) ce que j'ai pu réaliser via celui-ci.
      `,

    ],
    codeBtnText: "Voir le code",
    codeLink: "https://github.com/BlondeauJulien/language-app",
    siteBtnText: "Voir le site" ,
    siteLink: "https://learnyourway.herokuapp.com/"
  },

  GB: {
    appType: "Front End Web Application",
    frontend: "Front End with: HTML, CSS, Javascript ES6, React.",
    backend: "Back End with: NodeJS and mongoDB.",
    test: "API wrote in Test Driven Development with jest. Front-end tested with react-testing-library and jest.",
    responsive: "Responsive tablet and mobile.",
    keyFeaturesTitle: 'Key features',
    keyFeatures: [
      "Create, edit, delete an account.",
      "Create, edit, delete courses, words, quizzes.",
      "Vocanulary review via a small algorithm that permit to see the words you struggle on more often.",
      "Admin and moderator panel (ban user, delete courses, images...)."
    ],
    aboutTitle: 'About',
    about: [
      `
        After I started to learn norwegian and used a few languages apps I thought that building my own small language application could make 
        a great portfolio project. I also wanted to implement different roles in my next project (Admins, Moderators, Users) and it was ticking the box.
      `,

    ],
    codeBtnText: "See the code",
    codeLink: "https://github.com/BlondeauJulien/language-app",
    siteBtnText: "See the website" ,
    siteLink: "https://learnyourway.herokuapp.com/"
  }
}


const marmibon = {
  images: marmibonImagesArray,
  title: 'Marmibon',
  FR: {
    appType: "Application Web Full stack",
    frontend: "Front End avec: HTML, CSS, Javascript ES6, React.",
    backend: "Back End avec: NodeJS, mongoDB.",
    responsive: "Application responsive tablette et mobile.",
    keyFeaturesTitle: 'Fonctionnalités clés',
    keyFeatures: [
      "Création de compte.",
      "Créer, éditer et supprimer des recettes.",
      "Ajouter des recettes dans ses favoris.",
      '"Liker", noter et commenter les recettes.'
    ],
    aboutTitle: 'À propos',
    about: [
      `
      Ayant pour philosophie "d'apprendre en faisant", 
      je me suis lancé dans la réalisation de cette application juste après avoir fini un cours sur React 
      et appris les bases de nodeJS et mongoDB afin de consolider mes connaissances front end et d'apprendre pleinement
      la réalisation d'API et la gestion de bases de données.
      `,
      `
      C'est la première application full stack que j'ai réalisé.`
    ],
    codeBtnText: "Voir le code",
    codeLink: "https://github.com/BlondeauJulien/Marmibon-recipe",
    siteBtnText: "Voir le site" ,
    siteLink: "https://marmibon.herokuapp.com/"
  },

  GB: {
    appType: "Full stack Web Application",
    frontend: "Front End with: HTML, CSS, Javascript ES6, React.",
    backend: "Back End with: NodeJS, mongoDB.",
    responsive: "Resiponsive Application tablet and mobile.",
    keyFeaturesTitle: 'Key features',
    keyFeatures: [
      "Account creation.",
      "Create, edit and delete recipes.",
      "Add recipes to favorites.",
      'Like, rate and comment recipes.'
    ],
    aboutTitle: 'About',
    about: [
      `
      Having "learning by doing" as a philosophy, I went head first into creating this application after finishing a React course
      and learning the basic of NodeJS and mongoDB in order to consolidate my front end knowledge, learn more about API development
      and database management.
      `,
      `
      This is the first full stack application I made.
      `
    ],
    codeBtnText: "See the code",
    codeLink: "https://github.com/BlondeauJulien/Marmibon-recipe",
    siteBtnText: "See the website",
    siteLink: "https://marmibon.herokuapp.com/"
  }
}

const dartapp = {
  images: dartAppImagesArray,
  title: 'Darts Scoring & Stats Tracker',
  FR: {
    appType: "Application Web Front End",
    frontend: "Front End avec: HTML, CSS, Javascript ES6, React.",
    backend: "Back End avec: Pas de backend. J'ai utilisé localStorage pour sauvegarder les joueurs et leurs data.",
    responsive: "Responsive desktop & tablette seulement.",
    keyFeaturesTitle: 'Fonctionnalités clés',
    keyFeatures: [
      "Cible clickable.",
      "Sauvegarde de la data de chaque partie.",
      "Visualisation des statistiques des joueurs.",
      "Mise à jour instantané après chaque flèche lancée des meilleurs sortie possible pour gagner."
    ],
    aboutTitle: 'À propos',
    about: [
      `
        Une application qui me tient à coeur puisque je l'utilise régulièrement.
      `,
      `
        Après s'être mis aux fléchettes avec des amis nous n'avons pas trouvé de site avec toutes les fonctionalités que nous
        espérions. J'ai donc créer cette application sûr mesure pour nos parties et garder une trace de nos statistique/progression. 
      `,

    ],
    codeBtnText: "Voir le code",
    codeLink: "https://github.com/BlondeauJulien/dart-scoring",
    siteBtnText: "Voir le site" ,
    siteLink: "https://blondeaujulien.github.io/dart-scoring/"
  },

  GB: {
    appType: "Front End Web Application",
    frontend: "Front End with: HTML, CSS, Javascript ES6, React.",
    backend: "Back End with: No backend. I used localStorage to save the players and their data.",
    responsive: "Responsive desktop and tablet.",
    keyFeaturesTitle: 'Key features',
    keyFeatures: [
      "Clickable dartboard.",
      "Save all the games data.",
      "Visualisation of players statistics.",
      "Instant update of the best possible finishes after each throw."
    ],
    aboutTitle: 'About',
    about: [
      `
        An application dear to my heart because I use it regularly.
      `,
      `
        After we started to play darts with some friends, we didn't find any webapp with all the functionalities we wished for so 
        I made this application for our games and to keep a trace of our statistics/progress. 
      `,

    ],
    codeBtnText: "See the code",
    codeLink: "https://github.com/BlondeauJulien/dart-scoring",
    siteBtnText: "See the website" ,
    siteLink: "https://blondeaujulien.github.io/dart-scoring/"
  }
}

export default [learnapp, dartapp, marmibon]