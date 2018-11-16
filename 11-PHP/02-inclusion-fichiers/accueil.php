<?php
//include_once("include/header.php");
require_once("include/header.php");
include_once("include/nav.php");
/**
 * require()/ include sont des fonctions permettant d'inclure des fichiers dans d'autres fichiers
 * il n'y a pas de différence entre les deux ... sauf en cas d'erreur sur le nom du fichier, iln epeut donc pas être pris en compte :
 *  - include génère une erreur mais continu l'execution du script
 *  - require génère une erreur mais stop l'execusion du script
 * 
 * le "_onec" vérifie si le fichier a déja été inclus, si c'est le cas il ne ré-inclus pas
 */
?>





<section class="container text-center pt-4" style="min-height: 300px;">
    <p>Nous sommes sur la page d'accueil !!</p>
    <p>Nous sommes sur la page d'accueil !!</p>
    <p>Nous sommes sur la page d'accueil !!</p>
    <p>Nous sommes sur la page d'accueil !!</p>
    <p>Nous sommes sur la page d'accueil !!</p>
    <p>Nous sommes sur la page d'accueil !!</p>
</section>

<?php
include_once("include/footer.php");
?>