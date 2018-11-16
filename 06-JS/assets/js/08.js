/*▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ LES CONDITIONS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓*/


  var majoriteLegaleFr = 18;

  if(14 >= majoriteLegaleFr) {
      alert('Bienvenue !');
  }

  else if(18 == majoriteLegaleFr){
      alert("c'est un peu juste non ?!");
  }

  // -- LE ELSE N'EST PAS OBLIGATOIRE
  else{
      alert('Va voir chez google si...'); 
      
  }


/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    EXERCICE :
    ▔▔▔▔▔
    Créer une fonction permettant de vérifier l'age d'un 
    visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la 
    bienvenue, sinon, je fait une redirection sur Google
     après lui avoir signalé le soucis.
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ */

// -- 1. Déclarer la majorité
const majoriteLegaleFr = 18;

// -- 2. Vérifier si l'utilisateur est majeur (function)

function monUtilisateurEstMajeur( age ) {
    
    if ( age >= majoriteLegaleFr ) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
const age = parseInt( prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre age>") );

// -- 4. Vérification
if( monUtilisateurEstMajeur( age ) ) {

    alert("Bienvenue sur mon site réservé aux majeurs");
    document.write("^_^ !!!");

} else {

    // -- 5. Redirection
    alert('Vous devez être majeur pour accéder à ce site.');
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
    
}


/* ---------------------------------------------------------------------
//------------------------- ~ ~ Ma version ~ ~------------------------//

var majeur = 18;
function ctrlAge(){
    var age = parseInt(prompt("Quel age as-tu ? " ));
    if(age >= majeur){
        alert('Bienvenue !');   
    }
    else{
        alert('tu es trop jeune vas voir jouer chez google.');
        document.location.href="https://www.google.com/";
    }    
}
ctrlAge(); 
--------------------------------------------------------------------------*/


/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
◈           LES OPERATEURS DE COMPARAISON                  ◈
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈  ◈
◈                                                          ◈
◈   L'Opérateur de comparaison "==" signifie : Egal à.     ◈
◈   Il permet de vérifier que 2 variables sont identiques  ◈
◈                                                          ◈
◈   L'Opérateur de comparaison "===" signifie : strictement◈ 
◈   égale à. Il va comparer la valeur, mais aussi le type !◈
◈                                                          ◈
◈   if(14 == "14") {} = true                               ◈
◈   if(14 === "14") {} = false                             ◈   
◈   if(14 === 14 ) {} = true                               ◈
◈                                                          ◈
◈   L'Opérateur " != " : Différent de.                     ◈
◈   L'Opérateur " !== " : Strictement Différent de.        ◈
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈*/

/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    EXERCICE 2:
    ▔▔▔▔▔
    J'arrive sur un Espace Sécurisé au moyen d'un email
     et d'un mot de passe.
    Je doit saisir mon email et mon mot de passe afin 
    d'être authentifié sur le site.
    En cas d'échec une alert m'informe du problème.
    Si tous se passe bien, un message de bienvenue m'accueil.
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ */


// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

// -- 1. Demander à l'utilisateur son email / mdp
const emailUser = prompt("Bonjour, Quel est votre adresse email ?", "<Saisissez votre email>");

const mdpUser = prompt("Votre mot de passe ?", "<Saisissez votre mot de passe>");

// -- Exemple SANS les fonctions

// -- 2. Je vérifie si l'email / mdp saisie correspond avec ceux dans la BDD
// if ( emailUser === email && mdpUser === mdp) {

//     // -- 3. Tous est ok
//     alert("Bienvenue " + emailUser + " !");

// } else {

//     // -- 4. Erreur au niveau de l'authentification
//     alert("ATTENTION, email / mdp incorrect.");

// }

// -- Exemple AVEC les fonctions

function login( emailUser, mdpUser ) {
    return emailUser === email && mdpUser === mdp;
}

if( login( emailUser, mdpUser ) ) {

    alert("Bienvenue " + emailUser + " !");

} else {

    alert("ATTENTION, email / mdp incorrect.");

}



/*--------------------------------------------------------------------
//------------------------- ~ ~ Ma version ~ ~------------------------//

const email = "wf3@hl-media.fr";
 const mdp = "wf3";

 const verifMail = prompt("saisir votre mail");
 const verifMdp = prompt ("Saisir mdp");
 if(verifMail === email && verifMdp === mdp){
     alert( 'welcome !');
 }

 else{
     alert('erreur !');
 }
 -------------------------------------------------------------------- */

 /*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
◈                 LES OPERATEURS DE LOGIQUES                  ◈
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
◈                                                             ◈
◈   L'Opérateur ET : &&. Si la combinaison email et emailUser ◈
◈   correspond, ET la combinaison mdp et mdpUser correspond.  ◈
◈                                                             ◈
◈   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT   ◈ 
◈   correspondre pour être validée.                           ◈
◈   Ex. if(emailUser === email && mdpUser === mdp){...}       ◈
◈   -------------------------------------------------------   ◈
◈                                                             ◈
◈   #L'Opérateur OU : ||. Si la combinaison email et emailUser◈
◈   correspond, ET/ OU la combinaison mdp et mdpUser correspond◈
◈                                                             ◈
◈   --> Dans cette condition, au moins l'une des deux doit    ◈
◈   correspondre pour être validée.                           ◈
◈   Ex. if(emailUser === email || mdpUser === mdp){...}       ◈
◈   -------------------------------------------------------   ◈
◈                                                             ◈
◈    # L'opérateur "!" ou encore NOT.                         ◈
◈    Il signifie le CONTRAIRE DE, DIFFERENT DE                ◈
◈                                                             ◈
◈    var monUtilsateurEstApprouve = true;                     ◈
◈    if(!monUtilsateurEstApprouve ){...}                      ◈
◈      Si mon utilisateur n'est pas approuvé                  ◈
◈                                                             ◈
◈      Revient à écrire                                       ◈
◈      if(monUtilsateurEstApprouve === false ){...}           ◈
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈*/