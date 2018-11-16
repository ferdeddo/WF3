import { Injectable } from '@angular/core';
import {Contact} from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsStorageService {

  constructor() { }

  /*
  * Retourne une liste de contacts
  * depuis le local storage
  */
  getContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return (null !== contacts) ? contacts : [];
  }

  /*
 * Permet de sauvegarder
 * mes contacts dans le storage.
 */
  save(contacts: Contact[]) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

}
