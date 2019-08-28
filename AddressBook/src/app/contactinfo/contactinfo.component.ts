import { Component, OnInit } from '@angular/core';
import { ContactslistService } from '../services/contactslist.service';
import { Contact } from '../models/contact';
import { ContactoperationsService } from '../services/contactoperations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {
  contact:Contact;
  constructor(private contactlist:ContactslistService,private con:ContactoperationsService,private router:Router) { }

  ngOnInit() {
    this.contactlist.selectedcontact.subscribe(val =>{
      this.contact=val;
    })
  }
  edit()
  {
    this.router.navigate(['edit']);
  }
  delete(){
    this.con.delete(this.contact.id);
  }
}
