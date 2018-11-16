<?php
// Exo 2 :
echo '<pre>'; print_r($_POST); echo '</pre>';

$content = '';
$error = '';
if($_POST) // si on valide le formulaire, on entre dans les accolades
{   // Si la taille du pseudo est inférieur à 2 ou si la taile du speudo est          supérieur à 20, alors on entre dans les accolades
    // Exo 3 :
    if(iconv_strlen($_POST['pseudo']) < 2 || iconv_strlen($_POST['pseudo']) > 20)
    {
        $error .= '<div class="col-md-6 offset-md-3 alert alert-danger text-center">Pseudo invalide! entre 2 et 20 caractères</div>';
    }
    if(iconv_strlen($_POST['nom']) < 2 || iconv_strlen($_POST['nom']) > 20)
    {
        $error .= '<div class="col-md-6 offset-md-3 alert alert-danger text-center">Nom invalide! entre 2 et 20 caractères</div>';
    }
    // Exo 4 :
    if($_POST['mdp'] != $_POST['confirm_mdp'])
    {
        $error .= '<div class="col-md-6 offset-md-3 alert alert-danger text-center">Vérifier vos mots de passe!!!</div>';
    }
    // Exo 6 :
    if(!preg_match('#^[a-zA-Z0-9._-]{2,20}+$#', $_POST['pseudo']))
    {
        $error .= '<div class="col-md-6 offset-md-3 alert alert-danger text-center">Caractères autorisés pseudo : [a-zA-Z0-9._-]{2,20} </div>';
    }
    // preg_match() : expression régulière (regex) est toujours entouré de dieze afin de préciser les options :
    // ^ indique le début de la chaine
    // $ indique la fin de la chaine
    // + est la pour préciser que les caractères peuvent être utilisés plusieurs fois 
    // a-z : de a à z en minuscule
    // A-Z : de A à Z en majuscule
    // 0-9 : de 0 à 9
    // ._- : on autorise le point, le underscore et le tiret du 6
    // {2,20} : entre 2 et 20 caractère autorisés

    // Exo 5 :
    if(!is_numeric($_POST['telephone']) || iconv_strlen($_POST['telephone']) != 10)
    {
        $error .= '<div class="col-md-6 offset-md-3 alert alert-danger text-center">Téléphone non valide </div>';
    }

    // Exo 8 :
    if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
    {
        $error .= '<div class="col-md-6 offset-md-3 alert alert-danger text-center">Format email non valide !!! </div>';
    }

    // Exo 7 : 
    if(empty($error)) // si la variable $error est vide, cela veut dire que nous ne sommes entré dans aucune des conditions IF précédente, donc l'internaute a bien repmpli le formulaire, on valide
    {
        // requete INSERTION BDD
        $content .= '<div class="col-md-6 offset-md-3 alert alert-success text-center">Vous êtes inscrit dès à présent sur notre site!!!! </div>';
    }

    $content .= $error; // on stock les messages d'erreur et de validation dans la même varaible
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
        1. Réaliser un formulaire HTML avec les champs suivants :
        - pseudo, mot de passe, confirmer mot de passe, email, nom, prenom, sexe, telephone, adresse, ville, code postal et un bouton submit
        2. Contrôler en PHP  que l'on receptionne bien toute les données saisies dans le formulaire
        3. Faites en sorte d'informer l'internaute si le pseudo n'est pas compris entre 2 et 20 caractères 
        4. Faites en sorte d'informer l'internaute si les mots de passe ne sont pas identiques
        5. Faites en sorte que le chamsp téléphone ne soit pas laissé vide, qu'il soit de type numérique (fonction prédéfinie) et de 10 caractères
        6. Faites en sorte que le pseudo accepte seulement les caractères suivant : a-zA-Z0-9._- (pregmatch fonction prédéfinie)
        7. Si jamais le formulaire est correctement rempli donc qu'il n'y a pas d'erreur, afficher un message de validation
        8. Faites en sorte d'informer l'internaute si le champs email n'est pas valide (fonction prédéfinie)


    -->
    <div class="container mb-4">
        <h1 class="display-4 text-center">Inscription</h1><hr>
        <?= $content; ?>
        <form method="POST" action="" class="col-md-6 offset-md-3">
        <div class="form-group">
            <label for="pseudo">Pseudo</label>
            <input type="text" class="form-control" id="pseudo" name="pseudo"  placeholder="Enter pseudo">
        </div>
        <div class="form-group">
            <label for="mdp">Mot de passe</label>
            <input type="text" class="form-control" id="mdp" name="mdp"  placeholder="Enter mdp">
        </div>
        <div class="form-group">
            <label for="confirm_mdp">Confirmer mot de passe</label>
            <input type="text" class="form-control" id="confirm_mdp" name="confirm_mdp"  placeholder="Confirmer mdp">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="nom">Nom</label>
            <input type="text" class="form-control" id="nom" name="nom"  placeholder="Enter nom">
        </div>
        <div class="form-group">
            <label for="prenom">Prenom</label>
            <input type="text" class="form-control" id="prenom" name="prenom"  placeholder="Enter prenom">
        </div>
        <div class="col-md-3 form-group pl-0">
            <label for="sexe">Sexe</label>
            <select class="form-control" id="sexe" name="sexe">
                <option value="m">Homme</option>
                <option value="f">Femme</option>
            </select>
        </div>
        <div class="form-group">
            <label for="telephone">Telephone</label>
            <input type="text" class="form-control" id="telephone" name="telephone"  placeholder="Enter telephone">
        </div>
        <div class="form-group">
            <label for="adresse">Adresse</label>
            <textarea class="form-control" id="adresse" name="adresse" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="ville">Ville</label>
            <input type="text" class="form-control" id="ville" name="ville"  placeholder="Enter ville">
        </div>
        <div class="form-group">
            <label for="code_postal">Code Postal</label>
            <input type="text" class="form-control" id="code_postal" name="code_postal"  placeholder="Enter code postal">
        </div>
        <button type="submit" class="col-md-12 btn btn-dark">Inscription</button>
        </form>
    </div>
</body>
</html>