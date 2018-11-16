<!-- ✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪✪ -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
  <div class="container">
        <h1 class="display-4 text-center">Inscription</h1><hr>
    <?php 
        session_start();
        $_SESSION['pseudo']= 'Manu';
        $_SESSION['nom']= 'toto';

        echo '<pre>'; print_r($_SESSION); echo'</pre>';

       // unset($_SESSION['nom']); //vider une partie de la session

        echo '<pre>'; print_r($_SESSION); echo'</pre>';

       // session_destroy();

        echo '<pre>'; print_r($_SESSION); echo'</pre>';

        /**
         * Les information d'une session sont enrégistrés dans la session
         * côté serveur, cela crée dans le meme temps un fichier cookie
         * précisiment à l'identifiant de la session
         * 
         * une session est un moyen simple de garder des variables actives 
         * tout le long du script et quelque soit la page dans laquelle on
         * se trouve.
         * 
         * C'est ce qui nous permet d'être connecté et de pouvoir naviguer 
         * sur un site tout en restant connecté.
         * Sans les sessions, si on change de page, on serait déconnecté 
         * automatiqument
         * 
         * Les données enrégistrés sont par exemple : nom, prenom, email etc..
         * (sauf le mot de passe), ainsi que les données liés au panier,
         * 90% n'aboutissent jamais, c'est la raison pour laquelle on conserve 
         * les données du panier dans la session et non dans la BDD 
         */
    ?>

   </div>
</body>
</html>



















<!--──────▄▄▄▄▄███████████████████▄▄▄▄▄──────
    ────▄██████████▀▀▀▀▀▀▀▀▀▀██████▀████▄────
    ──▄██▀████████▄─────────────▀▀████─▀██▄──
    ─▀██▄▄██████████████████▄▄▄─────────▄██▀─
    ───▀█████████████████████████▄────▄██▀───
    ─────▀████▀▀▀▀▀▀▀▀▀▀▀▀█████████▄▄██▀─────
    ───────▀███▄──────────────▀██████▀───────
    ─────────▀██████▄─────────▄████▀─────────
    ────────────▀█████▄▄▄▄▄▄▄███▀────────────
    ──────────────▀████▀▀▀████▀──────────────
    ────────────────▀███▄███▀────────────────
    ───────────────────▀█▀─────────────────── -->
