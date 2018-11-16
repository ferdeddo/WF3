/*◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
    EXERCICE 2:
    ▔▔▔▔▔
     I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ol / ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ */

l = p => console.log(p);
w = p => document.write(p);
a = p => alerte(p);

var PremierTrimestre = [
     {
      prenom: "Goku",
      nom: "SON",
      moyenne : {
       math : 5,
       francais : 9,
       anglais : 2,
       histoire : 11,
       japonais : 14,
       Physique : 5,
    
        }
},
{
    
    prenom: "Ken",
    nom: "MASTER",
    moyenne : {
    
     francais : 12,
     anglais : 20,
     histoire : 15,
     japonais : 9,
     Physique : 14,
    
     techno : 12,
      },
},
{
    
    prenom: "Pierre",
    nom: "DUPOND",
    moyenne : {
     math : 20,
     francais : 19,
     
     histoire : 16,
     
     Physique : 16,
     geo : 12,
     techno : "",
      },
},
{
    prenom: "Piccolo",
    nom: "DAEMAO",
    moyenne : {
     
     anglais : 2,
     histoire : 20,
     japonais : 19,
     Physique : 0,
     geo : 15,
     techno : "",
      },
},
{
    prenom: "Baki",
    nom: "HANMA",
    moyenne : {
     math : 8,
     francais : 12,
     
     histoire : 8,
     japonais : 12,
     Physique : 9,
     geo : 11,
     
      },
},
];
// -- 1. Je souhaite afficher la liste de mes étudiants
w('<ol>');
for(let i=0; i<PremierTrimestre.length; i++){
l(PremierTrimestre[i]);

 // -- 2. Afficher mes étudiants sur ma page
const etudiant = PremierTrimestre[i];

    w('<li>');
        w(etudiant.prenom + ' ' + etudiant.nom );
        w('<ul>');
        
        var nbrDeMatiere = 0, sommesDesNotes = 0;

        for (var matiere in etudiant.moyenne ){

        // -- Vérification console
            l(matiere);

            nbrDeMatiere++;
            sommesDesNotes +=  etudiant.moyenne[matiere]; 

        w('<li>');
            w(matiere + " : " + etudiant.moyenne[matiere] ); 
        w('</li>');
         }// -- fin for moyenne

         w('<li>');
         w('<strong> Moyenne générale : </strong>' + (sommesDesNotes /nbrDeMatiere).toFixed(2));
         
        w('</li>');

        w('</ul>');
    w('</li><br>');
}// -- fin for etudiant
w('</ol>');