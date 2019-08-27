import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {ContactslistService} from '../services/contactslist.service';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {
  displayContactsList:Contact[];
  constructor(private contactlist:ContactslistService) { }

  ngOnInit() {
    this.displayContactsList=this.contactlist.get()
  }
}
