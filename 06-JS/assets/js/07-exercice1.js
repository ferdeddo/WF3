
/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    EXERCICE 1:
    ▔▔▔▔▔
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ */

// -- 1. Initialisation des Variables
var objetDate = new Date();
var anneeActuelle = objetDate.getFullYear();

// -- 2. Création d'une Fonction
function identity() {

// -- 3. Je demande a l'utilisateur son prénom
    var prenom = prompt("Hello ! What is your name ?", "<Saisir votre Prénom>");
    console.log(prenom);

// -- 4. Je lui demande son age
    var age = parseInt(prompt("Hello " + prenom + " ! How old are you ?","<Saisir votre Age>"));
    console.log(age);
    console.log(typeof age);

// -- 5. Déduire l'année de naissance + alert
    var anneeDeNaissance = anneeActuelle - age;
    alert( "AMAZING ! So you're born in " + anneeDeNaissance );

// -- 6. Récapitulatif dans la page
    return {
        prenom : prenom,
        age: age,
        anneeDeNaissance: anneeDeNaissance
    };
    
}

// -- 7. Executer la fonction
console.log( identity() );
var identity = identity();
document.write( "Hello " + identity.prenom + " you're " + identity.age + " years old !" );
