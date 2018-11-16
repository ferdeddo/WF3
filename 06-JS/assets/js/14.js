/*☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸\ 
| ⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎  LES EVENEMENTS   ⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎⁎ |
|☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸☸*/

/* 〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

 Les évènement vont me permettre de déclencher une Fonction,
 c'est à dire, une série d'instructions ; suite à une action 
 de mon utilisateur.

 Objectif : être en mesre de capturer ces évènements
 afin d'executer une fonction.
 
 Les Evenements : MOUSE (souris)
    
    click       : au click sur un élément ;
    dbclick     : au double clic ;
    mouseenter  : la souris passe au dessus d'un élément ;
    mouseleave  : la souris sors de l'élément ;
    mouseover   : au passage de la souris.

    cf : https://developper.mozilla.org/fr/docs/web/API/mouseEvent

Les Evenements  : KEYBOARD (clavier)

    keyup       : une touche du clavier a été relachée ;
    keydown     : une touche est enfoncée.

    cf : https://developper.mozilla.org/fr/docs/web/API/keyboardEvent

Les Evenements  : WINDOW (Fenêtre)

    scroll      : défilement de la fenêtre ;
    resize      : redimentionnement de la fenêtre .
 
Les Evenements  : FORM (Formulaire)

    change      : pour les événements <input>, <select> et <textarea> ;
    submit      : à l'envoi (soumission) du formulaire ;
    input       : pour capter la saisie d'un utilisateur sur un champ <input>.
    
〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓 

LES ECOUTEURS D'EVENEMENTS

Pour attacher un évènement à un élément, ou autrement dit, pour déclarer un 
écouteur d'évènements qui se chargera de déclencher une fonction, je vais utiliser 
la syntaxe suivante :

〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓 */

const p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge(){
    p.style.color = "red";
}

function changerLaCouleurEnNoir(){
    p.style.color = "black";
}

p.addEventListener('mouseenter', changerLaCouleurEnRouge);
p.addEventListener('mouseleave', changerLaCouleurEnNoir);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// -- Création d'un champ input

const input = document.createElement('input');
input.type = 'text';
input.id  = 'INPUT';

// -- Ajouter dans la page
document.body.appendChild(input);

/*------------------------------------------------------
 On écoute l'évenement "change" sur le champ "input"
 et on execute la fonction "displayUserInput"
--------------------------------------------------------*/

function displayUserInput(){
    alert(input.value);
}

input.addEventListener('change', displayUserInput );
