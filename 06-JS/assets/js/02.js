// -- Déclarer un tableau indexé

var monTableau  = [];
var myArray     = new Array;

monTableau[0] = "Pierre";
monTableau[1] = "Luffy";
monTableau[2] = "Bulma";
monTableau[3] = "Stéphanie";

console.log(monTableau); // -- Affiche toutes les données
console.log(monTableau[2]);// -- Affiche Bulma
console.log(monTableau[3]); // -- Affiche Stéphanie


var nosPrenoms = [
    "Momo",
    "Sébastien",
    "Hocine",
    "Vincent",
    "Olivier"
];

console.log(nosPrenoms);

var Coordonnee = {
    // INDICE : VALEUR
    prenom  :   "Goku",
    nom     :   "SON",
    age     :   41
};

console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.prenom);

var annuaireDesApprenants = [
    [ "Pierre", "DUPOND", "0712 12 12 12" ],
    [ "Samy", "DUJAVA", "0612 12 12 12"],
    {
        prenom: "Stéphane",
        nom:    "LAPIERRE",
        tel:    "0612 12 12 12"
    },
    {
        prenom: "Momotaro",
        nom:    "ALIGATO",
        tel:    "0615 14 13 12"
    }
];

console.clear();
console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants[1][0]);
console.log(annuaireDesApprenants[1][1]);
// -- Ce n'est pas très pratique !!!

console.log(annuaireDesApprenants[3].prenom);
console.log(annuaireDesApprenants[3].nom);

console.clear();

var Contacts = [
    {
        prenom: "Goku",
        nom: "SON",
        coordonnees : {
            email: "sonGoku@email.fr",
            tel: {
                fixe: "0512 111 333",
                fax: "0513 111 333",
                port: "0712 12 12 12"
            },
            adresse: {
                rue: "23 Rue Eugène Pomme de Terre",
                cp: "78190",
                ville: "Trappes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    },
    {
        prenom: "Momotaro",
        nom: "ALIGATO",
        coordonnees : {
            email: "momo.taro@email.fr",
            tel: {
                fixe: "0134 56 78 99",
                fax: "",
                port: "0612 12 12 12"
            },
            adresse: {
                rue: "34 Rue des Oiseaux",
                cp: "78190",
                ville: "Trappes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    }
];

console.log(Contacts);
console.log( Contacts[0].prenom );
console.log( Contacts[0].coordonnees.adresse.pays.nom );

console.log( Contacts[1].prenom );
console.log( Contacts[1].coordonnees.adresse.pays.nom );

// -- C'est ce qu'on appel le format JSON



/**------------------------------------------
 *              ~ ~ CONSIGNE ~ ~
 *       Réaliser une structure JSON
 *       permettant de stocker des
 *       recette de cuisine.
-------------------------------------------*/

var recipes = [ //recettes
    
    {   
        name : 'Carottes râpées au sésame',
        category: 'Dessert',
        subCategory: 'Gateaux',
        origin: '',
        cost : 'Abordable',
        difficulty: 'Très Facile',
        starRating: 4.564956,
        plate: 6,
        photoUrl: 'https://image.afcdn.com/recipe/20100120/22456_w600.jpg',
        videoUrl: '',
        
        cooking: {
            preparation : '10min',
            time : '',
            temp : '',
            rest : '',
            chill : '', 
            total: '10min'
        },

        ingredients: [
            {
                name : 'carotte',
                quantity : 1,
                unit : 'g',
                imgUrl : 'https://image.afcdn.com/recipe/20170607/67370_w100h100c1cx350cy350.jpg',
            },
            {
                name : 'sésame',
                quantity : 2,
                unit : 'Cuillères à soupe',
                imgUrl : 'https://image.afcdn.com/recipe/20170607/67391_w100h100c1cx350cy350.jpg',
            },
        ],

        tools: [
            {
                name : 'râpe',
                quantity : 1,
                imgUrl : 'https://image.afcdn.com/recipe/20170613/68861_w120h120c1cx350cy350.jpg',
            },
            {
                name : 'grille',
                quantity : 1,
                imgUrl : 'https://image.afcdn.com/recipe/20170613/68822_w120h120c1cx350cy350.jpg',
            },
        ],
        

       instructions : [
           {
               name : 'Râper les carottes',
           },

           {
            name : "Faire griller dans une poêle les graines de sésame jusqu'à ce qu'elles soient colorées, mais non brûlées (bien surveiller!).",
           },

           {
            name : 'Faire la sauce en mélangeant vinaigre, huile, sel et poivre. Assaisonner les carottes avec la vinaigrette, puis les saupoudrer des graines de sésame. ',
        },

       ],
    }
        
    ];

console.log(recipes);

/* ------------------------------
        AJOUTER UN ELEMENT
--------------------------------*/

console.clear();
var couleurs = ['Rouge', 'Jaune', 'Vert'];

console.log(couleurs);

//-- push me permet d'ajouter un élément à a fin du tableau.
couleurs.push('Orange');
// couleur.push(15);
// couleur.push(false);

// -- unshift le rajoute au début
couleurs.unshift('Bleu');
console.log(couleurs);

/* --------------------------------
 RECUPERER ET SORTIR LE DERNIER ELEMENT
----------------------------------*/

//la fonction pop() me permet de supprimer le dernier élément d'un tableau et retourne cet élément.

var monDernierElement = couleurs.pop();
console.log(couleurs);
console.log(monDernierElement);

/**
 * La même chose est possible avec le premier élément
 * en utilisant : shift().
 * 
 * La fonction splice() vous permet de faire sortir un 
 * ou plusieurs éléments du tableau.
 *  
 */
