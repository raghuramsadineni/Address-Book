import { Component, OnInit } from '@angular/core';
import {ContactView} from '../models/contactview';
import {ContactslistService} from '../services/contactslist.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {
  displayContactsList:ContactView[];
  constructor(private contactlist:ContactslistService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.contactlist.get()
    this.contactlist.conl.subscribe(res=>{
      this.displayContactsList=res;
    });
  }
  goto(id:number)
  {
    this.contactlist.selectedContact(id);
    this.router.navigate(['/info',id]);
  }
}
