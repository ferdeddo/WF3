/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    EXERCICE 2:
    ▔▔▔▔▔
     A partir du tableau fourni, vous devez mettre en place un système d'authentification. 
    Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, 
    et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue 
    avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur. 

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ */
// -- Les flemards.js
l = p => console.log(p);
w = p => document.write(p);
a = p => alerte(p);
// --

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];

// -- 1. Demander à l'utilisateur ses identifiants
const emailUser = prompt("Bonjour, Quel est votre adresse email ?", "<Saisissez votre email>");
const mdpUser = prompt("Votre mot de passe ?", "<Saisissez votre mot de passe>");

/**
 * Vérifie et Identifie un utilisateur via la BDD
 */
function connexion(emailUser, mdpUser) {

    // -- 2. On parcours le tableau d'utilisateurs
    const nombreElementsDeMonTableau = BaseDeDonnees.length;
    for( let i = 0 ; i < nombreElementsDeMonTableau ; i++ ) {

        // -- Je vérifie que j'arrive à récupérer mes informations.
        console.log( BaseDeDonnees[i] ); 
        const user = BaseDeDonnees[i];

        // -- 3. Si on trouve une correspondance entre l'email et le mdp saisie par l'utilisateur et la BDD
        if ( emailUser === user.email && mdpUser === user.mdp ) {

            // -- 4. L'utilisateur existe dans mon tableau
            return user;

        }
        
    }

    // -- Il n'y a eu aucune correspondance
    return false;

    // -- AUTRE METHODE
    // return BaseDeDonnees.find( function(user) {
    //     return emailUser === user.email && mdpUser === user.mdp;
    // } );

    // return BaseDeDonnees.find( user => emailUser === user.email && mdpUser === user.mdp );
    
}

const monUtilisateur = connexion(emailUser, mdpUser);
console.log(monUtilisateur);

if ( !monUtilisateur ) {
    alert("ATTENTION, email / mdp incorrect.");
} else {
    document.write("Bonjour " + monUtilisateur.prenom + " !");
}




