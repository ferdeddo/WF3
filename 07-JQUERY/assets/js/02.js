/* 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻
    ♦️    LES SELECTEURS JQUERY ♦️ 
   🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺*/

//-- fORMATS / $('selecteur)
//-- En Jquery, tous les selecteurs css sont disponibles

$(function() {  //DOM IS READY

    //-- LES FLEMARDS JS
    l = p=>console.log(p);

    //--- selectionner les balises SPAN

    l(document.getElementsByTagName('span'))
    //en JQ
    l($('span'));

    // selectionner mon MENU par son ID

    l(document.getElementById('menu'));
    //en JQ
    l($('menu'));


     /* remarquez que JQUERY me permet de selectionner
        des elements bcp plus simplement que JS */

    // selectionner une classe
    l(document.getElementsByClassName('maClasse'));

    // en JQ
    l($('.maClasse'))
    
    // recuperer des liens
    l($('[href="https://google.fr"]')); // attention aux guillemets

    l($('[href]'));

});