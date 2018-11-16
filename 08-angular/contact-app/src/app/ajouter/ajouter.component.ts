import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/model/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter();
  // -- EventEmitter ('@angular/core')
  nouveauContact: Contact = new Contact();
  constructor() { }

  ngOnInit() {
  }

  submitContact() {

    /**
     * On attribue un ID à notre Contact.
     * afin de l'identifier parmi les autres
     */
    this.nouveauContact.id = Date.now();

    /*
    * Lorsque mon formulaire est soumis,
    * j'émet un événeent qui sera écouté
    * par mon application, et qui récupèrera,
    * les données de mon nouveau contact.
    */
    this.unContactEstCree.emit(this.nouveauContact);
    // -- je réinitialise le nouveau contact
    this.nouveauContact = new Contact();
  }
}
