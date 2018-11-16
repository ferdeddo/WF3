import {Component, OnInit} from '@angular/core';
import {Contact} from './shared/model/contact';
import {ContactsStorageService} from './shared/services/contacts-storage.service';

/**
 * Pour déclarer une classe comme composant de notre application,
 * on importe "component" via "@angular/core"
 */

class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}

/**
 * @Component est ce qu'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres :
 */
@Component({

  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>.
   * Vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',

  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',

  /**
   * La déclaration des styles CSS
   * avec "styleUrls ou style".
   * NB: c'est un tableau.
   */
  styleUrls: ['./app.component.css']
})

/**
 * La classe contient les données du composant,
 * mais aussi, son comportement. Dans notre
 * contexte MVVM, notre classe correspond au Model.
 */
export class AppComponent implements OnInit{
  /**
   * La methode constructor est appelée automatiquement
   * par Angular au moment de l'initialisation de AppComponent
   *
   * Me permet d'injecter dans
   * AppComponent mon contactsStorageService.
   *
   * Ainsi, lorsque mon composant est chargé, je peux
   * utiliser mon contactsStorageService.
   */
  constructor(private contactsStorageService: ContactsStorageService) {

  }

  // -- Déclaration d'une variable
  title = 'Gestion de Contact';

  // -- Contact choisi par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un contact
  unCotact: Contact = {
    id: 1,
    name: 'SON Goku',
    username: 'Gokudu78',
    email: 'goku@gmail.com',
  };

  /**
   * Dans le cadre demon app de contacts
   * je vais utiliser un tableau pour les
   * stocker.
   */
  mesContacts: Contact[] = [];

  /**
   * LA méthode showcontact est executée
   * lorsqu'un contact est cliqué.
   */
  showContact(contactCliqueParMonUtilisateur: Contact) {
    // console.log('contactCliqueParMonUtilisateur');
    this.contactActif = contactCliqueParMonUtilisateur;
  }
  /*
   * Récupère le nouveauContact depuis
   * l'event "unContactEstCree" après
   * la soumission du formulaire
   */
  addContactToArray(nouveauContact: Contact){
    // -- Ajout du contact dans le tableau
    this.mesContacts.push(nouveauContact);

    // -- Je sauvegarde mes contacts
    this.saveContacts();
  }

  /*
  *Cette fonction est appelée
  * après mon constructor
  */
  ngOnInit(): void {
   this.mesContacts = this.contactsStorageService.getContacts();
  }

  saveContacts() {
    this.contactsStorageService.save(this.mesContacts);
  }
}
