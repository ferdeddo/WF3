<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Formulaire 3</title>
</head>
<body>
     <!-- 
        Exo : réaliser un formulaire HTML avec les champs suivants : pseudo, email et bouton submit
        Afficher les données saisies dans le formulaire directement sur la page formulaire4.php 
    -->
    <div class="container">
        <h1 class="display-4 text-center">Connexion</h1><hr>

        <form method="POST" action="formulaire4.php" class="col-md-6 offset-md-3">
        <div class="form-group">
            <label for="pseudo">Pseudo</label>
            <input type="text" class="form-control" id="pseudo" name="pseudo"  placeholder="Enter pseudo">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <button type="submit" class="col-md-12 btn btn-dark">Connexion</button>
        </form>
    </div>
</body>
</html>
</body>
</html>