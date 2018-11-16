<?php
if($_POST)
{
    echo "Votre pseudo : " .  $_POST['pseudo'] . '<br>';
    echo "Votre Email : " .  $_POST['email'] . '<br>';
    // Exo : Ecrire dans un fichier texte crée dynamiquement, les données saisies dans le formulaire3.php à l'aide des fonctions suivantes :
    $liste = fopen('liste.txt', "a"); // permet d'ouvrir ou de créer le fichier texte si il n'existe pas
    fwrite($liste, $_POST['pseudo'] . ' - ' . $_POST['email'] . "\r\n"); // fwrite permet d'écrire dans le fichier texte
    fclose($liste); // permet de fermer le fichier et libérer de la ressource

}
else
{
    echo "<p style='color: red;'>Casse toi de la!! t'as rien à foutre ici!!!</p>";
}