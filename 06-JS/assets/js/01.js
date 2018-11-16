// alert('Mon fichier JS fonctionne !')

// -- 1 : Déclarer une variable JS
var prenom;

// -- 2 : Affecter une valeur
prenom = "ferdeddo";

// -- 3 : Afficher la valeur de ma variable dans la console
console.log(prenom);


/* -------------------------------------------------------------
|~~~~~~~~~~~~~~~~~~~ LES TYPES DE VARIABLES ~~~~~~~~~~~~~~~~~~~|
------------------------------------------------------------- */

// -- typeof, me permet de connaitre le type de ma variable
console.log(typeof prenom);

// -- déclaration et affectation d'un nombre
var age = 40;

// -- connaitre son type
console.log(typeof age);

/* -------------------------------------------------------------
|~~~~~~~~~~~~~~~~~~~ LA PORTEE DES VARIABLES ~~~~~~~~~~~~~~~~~~~|
| Les Variables diclarées directement à la racine du fichier JSON, |
| sont appelées : variables : GLOBALES.age                         |
|                                                                  |
| Elles sont disponible dans l'ensemble de votre document, y       |
| compris dans les fonctions.|
||
|    ###|
||
| Les variables déclarées à l'interieur d'une fonction sont| 
| appelées : variables LOCALES.|
||
| Elles sont disponible UNIQUEMENT dnas le scope (espace disponible)|
| de la fonction.|
------------------------------------------------------------- */

// -- les variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les variables de type BOOLEAN (vrai / faux)
var unBooleen = false; // true
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les variables de type CONSTANTE

/** 
* La diclaration CONST me permet de créer une constante
* accessible UNIQUEMENT en lecture. Sa valeur ne pourra 
* pas être modifiée par des réaffactations ultérieures.
* Une constante ne peut pas être déclarée à nouveau... 
*/

const host = 'localhost';
const user = 'root';
const password = "mysql";

//je ne peux pas faire cela
 user = "Hugo";
// Uncaught TypeError: Assignment to constant variable.


var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/**
 * La fonction parseInt() pour retourner
 * un Entier à partir de mon string.
 */

 // -- pour convertir un Entier
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

 // -- pour convertir un Float
 unNombre = "12.55";
 unNombre = parseFloat(unNombre);
 console.log(unNombre);
 console.log(typeof unNombre);

// -- Pour convertir un nombre entier ou float en string

unNombre = 10;
var monString = unNombre.toString();
console.log(monString);
console.log(typeof monString);