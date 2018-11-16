/*------------------------------------------------------------------\ 
| ~ ~ ~ ~ ~ ~ ~ ~  LA MANIPULATION DES CONTENUS ~ ~ ~ ~ ~ ~ ~ ~ ~   |
|------------------------------------------------------------------*/

l = p => console.log(p)

// -- Je souhaite récupérer mon lien Google... comment procéder ?

const google = document.getElementById('google');
//vérifier dans la console
console.log(google);

// -- Maintenant, je souhaite accéder aux informations de ce lien...

    // -- A : Le lien vers lequel pointe la balise
    console.log(google.href);

    // -- B : L'ID de la balise
    console.log(google.id);

    // -- C : La classe de la balise
    console.log(google.className);

    // -- D : Le texte de la balise
    console.log(google.textContent);


    /**
     * Maintenant je souhaite modifier le texte de mon lien !
     */

    google.textContent = "Mon lien vers GooOOoogle !";

/*------------------------------------------------------------------\ 
                AJOUTER UN ELEMENT DANS MA PAGE
\------------------------------------------------------------------*/

// -- Définition de l'élément

const span = document.createElement('span');

// Je donne ID

span.ID = "monSpan";

// Je rajoute du texte

span.textContent = " Mon beau texte en JS !";

// Je le place dans le lien "#google"

google.appendChild(span);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

const h1 = document.createElement('h1');
const a = document.createElement('a');


a.textContent = "Emoji store ^^";

a.href = "https://coolsymbol.com/";

h1.appendChild(a);
document.body.appendChild(h1);

a.style.color = "red";
a.style.textDecoration = "none";
