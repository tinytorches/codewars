// Welcome!
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win. 

// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

const database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

const greet = ( language = english ) => {
    if ( language === 'english' ) {
        return database.english
    } else if ( language === 'czech' ) {
        return database.czech
    } else if ( language === 'danish' ) {
        return database.danish
    } else if ( language === 'dutch' ) {
        return database.dutch
    } else if ( language === 'estonian' ) {
        return database.estonian
    } else if ( language === 'finnish' ) {
        return database.finnish
    } else if ( language === 'flemish' ) {
        return database.flemish
    } else if ( language === 'french' ) {
        return database.french
    } else if ( language === 'german' ) {
        return database.german
    } else if ( language === 'irish' ) {
        return database.irish
    } else if ( language === 'italian' ) {
        return database.italian
    } else if ( language === 'latvian' ) {
        return database.latvian
    } else if ( language === 'lithuanian' ) {
        return database.lithuanian
    } else if ( language === 'polish' ) {
        return database.polish
    } else if ( language === 'spanish' ) {
        return database.spanish
    } else if ( language === 'swedish' ) {
        return database.swedish
    } else if ( language === 'welsh' ) {
        return database.welsh
    } else {
      return 'Welcome'
    }
}

// Superior solution
const greet = ( language ) => {
    return languages[language] || languages['english']
}

const languages = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso'
}