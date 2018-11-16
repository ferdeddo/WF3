$(function(){
   
    // --🍟 Déclaration d'un tableau pour stocker   
    const collectionDeContacts = [];

    /*🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟
               Valider son email
      🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟*/

    function validateEmail(email) {
	    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return regex.test(email);
    }
    
    /*🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟
       Valider son numéro de téléphone en FR
      🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟*/

	var validateTel = tel => {
	var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
	return telReg.test(tel);
    }


    $('#contact').submit(function(e){

        // --🍟 Stopper la redirection de la page
        e.preventDefault();

        // --🍟 Je récupère les éléments à vérifier
        const nom       =$('#nom');
        const prenom    =$('#prenom');
        const email     =$('#email');
        const tel       =$('#tel');
        let mesInformationsSontCorrect = true;

        var data = {};

        data.nom = nom.val();
        data.prenom = prenom.val();
        data.email = email.val();
        data.tel = tel.val();

         // --🍟 Validation du champ "Nom"
         if( nom.val().length === 0){
            mesInformationsSontCorrect = false; 
        }
        // --🍟 Validation du champ "Prénom"
         if( prenom.val().length === 0){
            mesInformationsSontCorrect = false; 
        }
        
        // --🍟 Validation du champ "email"
        if( !validateEmail(email.val())) {
            mesInformationsSontCorrect = false; 
        }
        
        // --🍟 Validation du champ "tel"
        if( !validateTel(tel.val())){
            mesInformationsSontCorrect = false;  
        }

        // --🍟 Si mes champs sont tous valides
        if(mesInformationsSontCorrect){
            // --🍟 alors je continue mon programme

            // --🍔 on vérifie si il existe déjà
            let monEmailEstPresent = false;

            // --🍔 On parcours le tableau de contact afin de vérifier si le mail saisi n'existe pas
            for (let i=0; i < collectionDeContacts.length; i++){
               
                if( email.val() === collectionDeContacts[i].email ){
                    // --🍔 si il y a une correspondance, l'email est présent
                    monEmailEstPresent = true;
                    // --🍔 Je force la sortie de la boucle pour ne pas écraser l'information à chaque passage
                    break;        
                }   
            }  
            // --🍔 Je notifie l'utilisateur si le mail est présent
            if (monEmailEstPresent){
                alert('ce contact existe déjà !')
            }
            else{
                // --🍔 tout va bien on peush les "data" dans la collection 
                collectionDeContacts.push(data);

                // --🥤 Afficher notre contact dans la page HTML
                $('.aucuncontact').hide();

                $('#LesContacts > tbody:last').append(
                    '<tr><th>'
                     + nom.val()
                     + '</th><th>'
                     + prenom.val() 
                     + '</th><th>' 
                     + email.val() 
                     + '</th><th>' 
                     + tel.val()
                     + '</th></tr>'
                     )

             // -- Bonus : notification
             //  $('.alert-contact').show(10).delay(4000).hide(2000);   
             $('.alert-contact').show(10).delay(4000).fadeout();

             // -- Bonus : Réinitialiser le formulaire
             // dowument.getElementById('contact').reset(); // En js
             $('#contact').get(0).reset();

            }
        console.log(collectionDeContacts);
             
        }
        else{
            // --🍟 sinon je notifie l'utilisateur q'une erreur est sourvenue
            alert('Attention ! veuillez renseigner tous les champs');
        }
        
        
        

       
    });

});