import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactoperationsService } from '../services/contactoperations.service';
import {Contact} from '../models/contact';
import { Router } from '@angular/router';
import { ContactslistService } from '../services/contactslist.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactForm:FormGroup;
  contact:Contact;
  constructor(private fb:FormBuilder,private con:ContactoperationsService,private router:Router,private contactlistservice:ContactslistService) { }

  ngOnInit() {
    if(this.router.url=='/edit'){
      this.contactlistservice.selectedcontact.subscribe(val=>{
        this.contact=val;
      })
      this.contactForm=this.fb.group({
        name:new FormControl([this.contact.name]),
        email:new FormControl([this.contact.email]),
        mobile:new FormControl([this.contact.mobile]),
        landline:new FormControl([this.contact.landline]),
        website:new FormControl([this.contact.website]),
        address:new FormControl([this.contact.address])
    });
    }
    else{
      this.contactForm=this.fb.group({
        name:new FormControl(['']),
        email:new FormControl(['']),
        mobile:new FormControl(['']),
        landline:new FormControl(['']),
        website:new FormControl(['']),
        address:new FormControl([''])
      });
    }
  }
  onSubmit(contactForm:FormGroup)
  {
    this.contact=this.contactForm.value
    if(this.contact.id>0){
      this.con.edit(this.contact);
    }
    else{
      this.con.add(this.contact);
    }
  }
}
