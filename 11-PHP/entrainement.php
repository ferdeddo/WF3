<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Entrainement PHP</title>
</head>
<body class="p-4">
    <h2 class="display-4 text-center">Ecriture et affichage</h2><hr>

    <?php // ouverture de la balise PHP 
    // Il est possible d'ouvrir et de fermer la balise PHP autant que l'on souhaite
    // Il est possible de coder du HTML dans un fichier PHP, mais l'inverse n'est pas possible, pas de PHP dans un fichier HTML

    echo 'Bonjour!!'; // echo est une instruction d'affiche que l'on peut traduire par 'affcihe moi'

    echo '<br>'; // on peux également y associer du HTML
    echo 'rebonjour!!!';

    ?>  <!-- fermeture de la balise PHP --> 

    <br><strong>J'ai faim!!!!</strong><br>
    <!-- Une fois la balise PHP fermée, on peut continuer à coder en HTML -->

    <?= "ALLO!!" // le = remplace le echo ?>

    <?php 
    echo '<hr><h2 class="display-4 text-center"> Commentaires </h2>';
    echo 'commentaire 1 ligne<br>'; // commentaire sur un seule ligne
    echo 'commentaire plusieurs ligne<br>'; /*
    commenatire sur plusieurs lignes
    */
    echo 'commentaire 1 ligne<br>'; # commentaire sur un seule ligne

    echo '<hr><h2 class="display-4 text-center"> Variables : Type / déclaration / Affectation </h2>';
    // Une variable est un espace nommé permettant de conserver une valeur
    // $1a -> invalide -- $a1 -> valide
    // Pas d'accent, pas d'espace, pas de caractères spéciaux, à part '_' et le '-', lettre minuscule et majuscule

    $a = 127; // affectation de 127 pour la variable nommé 'a'
    echo gettype($a); // revoi ; INTEGER (entier)
    // gettype() est une fonction prédéfinie dans le code PHP permettant de voir le type d'une variable
    echo '<br>';

    $b = 1.5;
    echo gettype($b); // un nombre à virgul : DOUBLE
    echo '<br>';

    $c = "une chaine de caractère";
    echo gettype($c); // une chaine de caractère : STRING 
    echo '<br>';
 
    $d = "127";
    echo gettype($d); // une chaine de caractère : STRING 
    echo '<br>';

    $e = true;
    echo gettype($e); // boolean
    echo '<br>';

    $f = false;
    echo gettype($f); // boolean
    echo '<br>';
    
    echo '<hr><h2 class="display-4 text-center"> Concaténation </h2>';
    $x = 'Bonjour ';
    $y = 'Tout le monde !<br>';
    echo $x . $y; // le point de concaténation que l'on peut traduire par 'suivi de'
    echo "$x $y"; // entre guillemets, les variables sont évaluées et interprétée
    echo '$x $y<br>'; // entre simple quote, les varaibles ne sont pas interprété, c'est une chaine de caractère
    echo "Hey ! " . $x . $y; // concaténation texte et variable
    echo $x , $y; // concaténation avec une virgule (la virgule et le point sont similaire)

    echo '<hr><h2 class="display-4 text-center"> Concaténation lors de l\'affectation</h2>';
    $prenom1 = "Claire";
    $prenom1 = "Bruno";
    echo $prenom1 . '<br>'; // affiche Bruno, on a ecrasé la valeur précédente de Claire par Bruno

    $prenom2 = "Nicolas ";
    $prenom2 .= "Marie"; // cela ajoute Marie à la variable "$prenom2" sans remplacer la valeur précédente grace à l'opérateur '.='
    $prenom3 = 'Toto'; 
    $prenom2 .= $prenom3; // on peut aussi concaténé avec des variables
    echo $prenom2 . '<br>'; 

    $chiffre = 127;
    $chiffre .= 35; // meme chose avec des chiffres, cela n'additionne pas ajoute sans remplacer la valeur précedente
    echo $chiffre . '<br>';

    echo '<hr><h2 class="display-4 text-center"> Constante et constante magique</h2>';

    define("CAPITALE", "Paris"); // define() est une fontion prédéfinie permettant de déclarer une constante 
    // une constante permet de conserver une valeur mais comme son nom l'indique elle est constante et on pourra pas la modifier dans le cours du script
    // 2 arguement : 1. le nom de la constante par convention en majuscule
    //               2. la valeur de la constante

    echo CAPITALE . '<br>';

    // define("CAPITALE", "Rome"); /!\ erreur!! il n'est pas possible de redéclarer et modifier la constante déja déclarée

    define("URL", "htpps://www.test.fr"); // utilie pour garder de manière certaine le chemin vers les site, ou avec la BDD etc...

    ?>
    <nav>
        <a href="<?= URL ?>">Test</a>
    </nav>
    <?php

    echo '<strong>Constante magique : </strong><br>';

    echo __LINE__ . "<br>"; // renvoi la ligne ou la constante a été executée
    echo __FILE__ . "<br>"; // renvoi le nom du fichier ou la constante a été executée
    echo __DIR__ . '<br>'; // renvoi le chemin du dossier PHP sur le serveur

    // http://php.net/manual/fr/ site de référence pour les développeurs PHP

    echo '<hr><h2 class="display-4 text-center"> Exercice variables </h2>';

    // Afficher vert-jaune-rouge (avec les tirets) en mettant chaque couleur dans une variable, et appliquer les bonnes couleur au 3 mots
    $vert = "<strong class='text-success'>vert</strong>";
    $jaune = "<strong class='text-warning'>jaune</strong>";
    $rouge = "<strong class='text-danger'>rouge</strong>";

    echo "$vert - $jaune - $rouge<br>";
    echo $vert . ' - ' . $jaune . ' - ' . $rouge . '<br>';

    echo '<hr><h2 class="display-4 text-center"> Opérateurs arithmétiques </h2>';
    $a = 10; $b = 2;
    echo $a + $b . '<br>'; // affiche 12
    echo $a - $b . '<br>'; // affiche 8
    echo $a * $b . '<br>'; // affiche 20
    echo $a / $b . '<br>'; // affiche 5

    echo '<strong>opération / affectation : </strong><br>';
    $a = 10; $b = 2;
    $a += $b; // equivaut à $a = $a + $b;
    echo $a . '<br>'; // affiche 12
                         
    $a -= $b; // equivaut à $a = $a - $b
    echo $a . '<br>'; // affiche 10

    $a *= $b; // equivaut à $a = $a * $b
    echo $a . '<br>'; // affiche 20

    $a /= $b; // equivaut à $a = $a / $b
    echo $a . '<br>'; // affiche 10

    echo '<hr><h2 class="display-4 text-center"> Strucutre conditionnelle (if / else) - opérateur de comparaison </h2>';

    echo '<strong>Isset & empty : </strong><br>';
    $var1 = 0;
    $var2 = "";

    // empty
    if(empty($var1))
    {
        echo "0, vide ou non définie<br>";
    }
    // empty test si une variable est à 0, vide ou non définie
    
    //isset 
    if(isset($var1))
    {
        echo "var2 existe et est définie par rien<br>";
    }
    // isset test l'existence d'une variable, si elle est définie et différente de NULL 

    //--------------------------------------------------------------------------
    /*
    OPERATEUR DE COMPARAISON
    =      affectation
    ==     comparaison de la valeur
    ===    comparaison de la valeur et du type
    <      strictement inférieur
    >      strictement supérieur
    <=     inférieur ou égal à 
    >=     supérieur ou égal à
    !      n'est pas 
    !==    différent de
    OR ||  ou 
    AND && et
    XOR    ou exclusif       
    */

    $a = 10; $b = 5; $c = 2;
    if($a > $b) // Si A est supérieur à B
    {
        echo "A est bien supérieur à B <br>";
    }
    else // cas par défault, dans les autre cas on entre dans les accolades et le code s'execute
    {
        echo "Non c'est B qui est supérieur à A <br>";
    }

    //---------------------------------------------------------------------------
    if($a == 8)  
    {
        echo "A est égal à 8<br>";
    }
    else if($b != 5 || $c == 2)
    {
        echo "Une des 2 condition est bonne !<br><br>";
    }
    else
    {
        echo "Tout le monde a faux!! <br><br>";
    }
    // elseif permet d'ajouter des conditions supplémentaires, il n'y a pas de limite
    // si une condition est respecté, elseif stop le script et toute les conditions suivantes ne seront pas évaluées

    echo '<strong>Condition exclusive XOR : </strong><br>';
    $a = 10; $b = 5; $c = 2;

    if($a == 10 XOR $b == 6)
    {
        echo "ok condition exclusive !! <br><br>";
    }
    // si les 2 conditions sont bonne ou mauvaise, nous ne rentrons pas dans les accolades, il faut que un seul condition soit respecté

    echo '<strong>Forme contractée (ternaire): </strong><br>';
    echo ($a == 10) ? "A est égal 10<br><br>" : "Tout le monde a faux<br>";
    // le ? remplace le IF et les 2 points ':' remplace le else

    echo '<strong> Comparaison : </strong><br>';
    $varA = 1; // INTEGER
    $varB = "1"; // STRING
    
    if($varA == $varB)
    {
        echo "Il s'agit de la même chose<br><br>";
    }
    // avec le triple égal, le test ne fonctionnne pas car les types des variables sont différent, INTEGER n'est pas égal à STRING
    // = affectation
    // == comparaison 
    // === comparaison de la valeur et du type

    echo '<strong> Condition switch : </strong><br>';
    $joueur = 'Mario';
    switch($joueur)
    {
        case 'Luigi': 
            echo 'Le meilleur c\'est Luigi<br>';
        break;

        case 'Todd': 
            echo 'Le meilleur c\'est Todd<br>';
        break;

        case 'Bowser': 
            echo 'Le meilleur c\'est Bowser<br>';
        break;

        case 'Peach': 
            echo 'Le meilleur c\'est Peach<br>';
        break;

        default:
            echo "Vous êtes fous c'est Mario le meilleur!!! <br><br>";
    }
    // switch permet d'effectuer un grand nombre de comparaison, c'est un moyen simple de comparer la valeur d'une variable à différents cas
    // les case représente les cas dans lesquels nous ppuvons potentiellement tomber
    // break stop l'execution du script si nous entrons dans un des cas, les cas suivants ne sont pas évalués

    echo '<strong> Exercice conditions : </strong><br>';
    // Pouvez vous faire la même chose que la switch avec des conditions if/elseif/else ? si oui, faites le. 
    $joueur = 'Mario';

    if($joueur == 'Luigi')
    {
        echo 'Le meilleur c\'est Luigi<br>';
    }
    elseif($joueur == 'Todd')
    {
        echo 'Le meilleur c\'est Todd<br>';
    }
    elseif($joueur == 'Bowser')
    {
        echo 'Le meilleur c\'est Bowser<br>';
    }
    elseif($joueur == 'Peach')
    {
        echo 'Le meilleur c\'est Peach<br>';
    }
    else
    {
        echo "Vous êtes fous c'est Mario le meilleur!!! <br><br>";
    }

    echo '<hr><h2 class="display-4 text-center"> Fonctions prédéfinies PHP </h2>';
    // une fonction prédéfinie permet d'executer un traitement spécifique.

    echo "Date : <strong>" . date("d/m/y") . '</strong><br><br>';
    // Lorsque l'on utilise une fonction prédéfinie, il faut toujours se poser la question de savoir ce que l'on doit lui envoyer comme argument et surtout savoir ce qu'elle retourne !!

    echo '<strong>Traitement des chaines : iconv_strlen , strpos, substr </strong><br>';

    echo '<strong>Strpos (string position) : </strong><br>';
    $email1 = "gregorylacroix78@gmail.com";

    echo "Le caractère se trouve à la position : " . strpos($email1, '@') . '<br>'; // affiche 16, le premier caractère se trouve à la position 0
    // Contexte : utile pour contrôler si le champs email d'un formulaire est valide
    // strpos() est une fonction prédéfinie permettant de trouver la position d'un caractère dans une chaine 
    // 2 argument : 
    // 1. la chaine de caractère
    // 2. le caractère a trouvé

    $email2 = "Bonjour";
    echo "Le caractère se trouve à la position : " . var_dump(strpos($email2, '@')) . '<br><br>';
    // la ligne ne sort rien puisque le caractère @ n'existe pas dans la chaine,  pourtant il y a bien quelque chose à l'intérieur : FALSE 
    // var_dump et print_r sont des instructions d'affichage améliorée, souvent utiliser pour debugger en phase de développement

    echo '<strong>iconv_strlen : </strong><br>';
    $phrase = "Mettez une phrase cet endroit";
    echo "Taille de la chaine : " . iconv_strlen($phrase) . '<br><br>';

    // iconv_strlen() est une fonction prédéfinie permettant de calculer la taille d'une chaine de caractère
    // Contexte : nous pourrions l'utiliser pous savoir si le pseudo et le mdp lors d'une inscription ont des tailles conforme

    echo '<strong>substr : </strong><br>';
    $texte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ipsum vitae venenatis tempus. Nam sit amet lacus sit amet est cursus interdum. Phasellus pellentesque, quam ac tincidunt vestibulum, tellus enim euismod magna, ac volutpat dolor dui ut quam. In non scelerisque nibh. ";

    echo substr($texte, 0, 20) . "... <a href='' class='alert-link'>Lire la suite</a><br>";
    // substr() est une fonction prédéfinie permettant de couper une partie de la chaine de caractère 
    // trois arguments 
    // 1. la chaine de caractère
    // 2. point de départ
    // 3. le nombre de caractère souhaités
    // Contexte : substr est souvent utilser pour afficher des actualités avec une "accroche". 

    echo '<hr><h2 class="display-4 text-center"> Fonctions utilisateur </h2>';

    // fonction sans argument
    function separateur()
    {
        echo "<hr><hr><hr>";
    }
    // une fonction se déclare toujours avec le mot clé "function" suivit du nom de la fonction que nous définissons, avec des parenthèses puisque qu'une fonction peut potentiellement recevoir des arguments
    // nom de la fonction : pas d'accent, pas d'espace, pas de cararctère spéciaux, et que le nom soit cohérent et intuitif

    separateur(); // execution de la fonction

    // fonction avec arguments 
                    // Malika
    function bonjour($qui = 'Lasad') // $qui ne sort pas null part. c'est nous qui la définissons, c'est une variable de récéption, on peut lui donner une valeur par défaut
    {
                    // Malika
        echo "Bonjour $qui<br>";
    }

    bonjour('Malika');
    bonjour(); // on execute la fonction sans envoyer d'argument puisque la variable $qui a une valeur par défaut
    $prenom = 'Christopher';
    bonjour($prenom) . '<br>';

    //------------------------------------------------------
                        // 500
    function appliqueTva($nombre)
    {           // 500
        return $nombre * 1.2; // une fonction peut retourner potentiellement qqchose, on utilise le mot clé 'return', à ce moment la on quitte la fonction et tout ce qui suit ne s'affiche pas
        echo 'Allo!!'; // cette ligne ne sort pas puisqu'il y a un return avant
    }

    echo appliqueTva(500) . '<br><br>'; // on passe par un 'echo' puisqu'il y a un return dans la fonction 
    // on ne peut pas déclarer deux fois la même fonction avec le meme nom

    echo '<strong>Exercice fonction : </strong><br>';
    // pouvez vous améliorer la fonction afin que l'on puisse calculé un nombre avec le taux de notre choix ? si oui, faites le.
    function appliqueTva2($nombre, $taux = 20)
    {  
        return $nombre * (1+$taux/100); // permet de calculer le coefficient d'un taux de TVA
    }
    echo "Tva 20% : " . appliqueTva2(500, 20) . '<br>';
    echo "Tva 20% : " . appliqueTva2(500, 7) . '<br>';

    //---------------------------------------------------------------------------
    meteo('automne', 12); // on peux executer une fonction avant de l'avoir déclarée
    function meteo($saison, $temperature)
    {
        if()
        {

        }
        else
        {

        }
        //------------------------------------
        if()
        {

        }
        else
        {

        }

        echo "Nous sommes en $saison et il fait $temperature degré(s)<br>";
    }

    // Exo : 1. gérer le 's' de dégré en fonction de la temperature
    //       2. gérer les mots 'en' ou 'au' en fonction de la saison








    



    




    
    




 



    



    






    ?>

</body>
</html>