<?php
echo '<pre>'; print_r($_POST); echo '</pre>';
// echo '<pre>'; var_dump($_POST); echo '</pre>'; // permet de controler que l'on récupère bien toute les données saisies dans le formulaire
// les attributs 'name' du formulaire correspondent aux indices du tableau ARRAY ($_POST)
// toutes les données saisies dans le formulaire vont se stocker directement dans la superglobale $_POST lorsque l'on valide le formulaire

// Exo : afficher les données saisies dans le formulaire en passant par la superglobale $_POST
if($_POST) // si je valide le formulaire, les indices 'name' du formulaire sont detéctés, il n'y a plus d'erreur au premier chargement de la page 
{
    echo "Votre Email : " . $_POST['email'] . '<br>';
    echo "Votre password : " . $_POST['password'] . '<br><hr>';

    // on passe en revue la superglobale $_POST avec la boucle foreach puisque elle de type ARRAY
    foreach($_POST as $key => $value)
    {
        echo "$key : $value<br>";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Formulaire 1</title>
</head>
<body>
    <!-- Réaliser un formulaire boostrap, avec les champs suivant : email, mot de passe et un boutton de validation submit -->
    <div class="container">
        <h1 class="display-4 text-center">Connexion</h1><hr>

        <form method="POST" action="" class="col-md-6 offset-md-3"><!-- method : comment vont circuler les données / action : url de destination -->
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password"  placeholder="Password">
            <!-- les attributs 'name' sont indispensables en PHP, ils correspondent aux indices du tableau ARRAY qui contient les données du formulaire ($_POST) -->
        </div>
        <button type="submit" class="col-md-12 btn btn-dark">Connexion</button>
        </form>
    </div>
</body>
</html>