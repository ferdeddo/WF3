import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/model/contact';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() contactProfil: Contact;
  @Output() contactChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /*
  * Fonction exécuté suite à la
  * modification d'un contact
  */
  contactModified() {
    // -- J'émet mon évenement.
    this.contactChanged.emit();
  }
}
