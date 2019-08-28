import { Component, OnInit } from '@angular/core';
import {ContactView} from '../models/contactview';
import {ContactslistService} from '../services/contactslist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {
  displayContactsList:ContactView[];
  constructor(private contactlist:ContactslistService,private router:Router) { }

  ngOnInit() {
    this.displayContactsList=this.contactlist.get()
  }
  goto(id:number)
  {
    this.contactlist.selectedContact(id);
    this.router.navigate(['/info',id]);
  }
}
