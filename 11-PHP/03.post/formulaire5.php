<?php
if($_POST)
{
    $_POST['email'] = "From: $_POST[email]"; // entetes du mail indispensable
    //$_POST['email'] = "From: " . $_POST['email'];
    $_POST['email'] .= "MIME-Version: 1.0 \r\n"; // protocole permettant  d'étendre les possibilités limitées du courrier électronique (mail) et notamment de permettre d'insérer des documents (images, sons, texte, ...) dans un courrier.
    $_POST['email'] .= "Content-type: text/html; charset=utf8"; // permet de coder en html directement dans le corps du message, pratique pour envoi de newsletter
    $_POST['message'] = "Nom: $_POST[nom] <br>$_POST[prenom]<br> $_POST[societe]<hr> $_POST[message]<br>"; // on modifie directement le corps du message pour lui apporter des détails en plus

    $mail = "gregorylacroix78@gmail.com";
    mail($mail, $_POST['objet'], $_POST['message'], $_POST['email']); // mail() est une fonction prédéfinie permettant l'envoi de mail
    // cette fonction doit recevoir 4 arguments et l'ordre a une importance cruciale
    // ordre des arguments : destiantaire / objet / message / expéditeur
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Formulaire 2</title>
</head>
<body>
    <!-- 
    1. Réaliser un formualire de contact avec les champs suivant : 
    - nom, prénom, Société, Email, Objet, message
    2. Contrôler en PHP que l'on receptionne bien toute les données du formulaire 
    -->
    <div class="container mb-4">
    <h1 class="display-4 text-center">Contact</h1><hr>
    <div class="container"><?php echo "<pre>"; print_r($_POST); echo '</pre>'; ?></div>
    <form method="post" action="" class="col-md-6 offset-md-3">
        <div class="form-group">
            <label for="nom">Nom</label>
            <input type="text" class="form-control" id="nom" name="nom"  placeholder="Enter nom">
        </div>
        <div class="form-group">
            <label for="prenom">Prénom</label>
            <input type="text" class="form-control" id="prenom" name="prenom"  placeholder="Enter prenom">
        </div>
        <div class="form-group">
            <label for="societe">Société</label>
            <input type="text" class="form-control" id="societe" name="societe"  placeholder="Enter societe">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" name="email"  placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="objet">Objet</label>
            <input type="text" class="form-control" id="objet" name="objet"  placeholder="Enter objet">
        </div>
        
        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" name="message" rows="3" ></textarea>
        </div>
        <button type="submit" class="col-md-12 btn btn-dark">Envoyer</button>
        </form>
    </div>
</body>
</html>

