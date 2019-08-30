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
    this.http.get("https://localhost:44346/api/values").subscribe(val=>{
      this.displayContactsList=<ContactView[]>val;
    });
  }
  goto(id:number)
  {
    this.contactlist.selectedContact(id);
    this.router.navigate(['/info',id]);
  }
}
