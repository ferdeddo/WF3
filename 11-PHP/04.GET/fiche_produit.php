<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
    <title>fiche_produit</title>
</head>
<body>
<div class="container">
        <h1 class="display-4 text-center">Fiche du produit n° <?= $_GET ['id_produit'] ?></h1><hr>
        <?php 
        echo '<pre>'; print_r($_GET); echo'</pre>';
        // afficher les détails des produits que nous avons transmit dans l'URL avec un affichage conventionnel 
        // Faire en sorte de ne pas avoir l'id du produit affiché sur la page


        // $_GET est une superglobale permettant de stocker les données transmise dans l'URL
       if($_GET){// on entre dans la condition IF seulement dans le cas ou l'on transmit des données dans l'URL, cela évite des erreurs 'undifined' au premier chargement de la page.
        foreach ($_GET as $key => $value) {
            if ($key != 'id_produit') { // si l'indice est différent de 'id_produit', alors on affiche successivement l'indice en fonction de la valeur
                echo "$key : $value<br>";
            }
        }    
       }  
        ?>
    </div>
</body>
</html>