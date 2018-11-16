/*▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ LES FONCTIONS  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓*/

/**◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
 * Déclarer une fonction.
 * NB : Cette fonction ne retourne
 * aucune valeur et ne prend pas de
 * paramètres.
 ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈*/

 function bonjour() {
     alert('Bonjour !');
 }

 /**◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
  * J'execute ma fonction, et je déclanche
  * ses intstructions.
  ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈*/

bonjour();

// function nomDeMaFonction( argument1, argument2, argumentn){
// Les instruction...    
// }

function ditBonjour (prenom, nom){
    console.log(prenom + ' ' + nom);
    document.write('Bonjour <strong>' + prenom + ' ' + nom + '</strong> ! ');
}

ditBonjour('Pierre', 'DUPOND');


/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    EXERCICE :
    ▔▔▔▔▔
    Créez une fonction permettant d'effectuer
    l'addition de deux nombres (nb1 et nb2)
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ */

function addition (nb1, nb2){
var resultat = nb1 + nb2;
console.log(resultat);    
document.write( resultat );
}
addition(11, 4);

// ou

function addition (nb1, nb2){
    return nb1 + nb2;
    }
console.log( addition(11, 4) );





