/*▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓   LES BOUCLES  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓*/

/**
 * Pour i = 0; Tant que i est strictement
 * inférieur ou égale à 10 ; alors j'incrémente i de 1.
 */

 for (let i = 0; i <=10; i++) {
      document.write('<p>Instruction executée avec la boucle for : <strong>' 
      + i + '</strong></p>');
    }

document.write('<hr>');

var j = 0;
while (j <= 10 ) {
    document.write('<p>Instruction executée avec la boucle while : <strong>' 
    + j + '</strong></p>');
    // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;
  }

/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    EXERCICE :
    ▔▔▔▔▔
◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ */
document.write('<hr>');

const Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jaques'];

/**
 * CONSIGNE : Grâce à une boucle FOR ou autre...,
 * affichez la liste des prénoms du tableau 
 * ci-dessus dans la console, ou sur votre page.
 **/

 for (let i =0; i < Prenoms.length; i++){
    document.write('' + Prenoms[i] + ' <br><br>');
 }

 // -- ATTENTIONNNNNNNNNNNN A LA PERFORMANCE !!! (de foreach)
 Prenoms.forEach(affichUnPrenom);
     function affichUnPrenom (prenom, index){
     console.log(index + ' ' + prenom );
 }
