import { Injectable } from '@angular/core';
import {ContactView} from '../models/contactview';
import {Contact,contacts} from '../models/contact';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactslistService {
  scontact:Contact;
  private c = new BehaviorSubject<Contact>(this.scontact);
  selectedcontact=this.c.asObservable()
  contactlist:ContactView[]
  constructor() { }
  get(){
    this.contactlist=contacts;
    return this.contactlist;
  }
  selectedContact(id:number){
    this.scontact=contacts[id-1];
    this.c.next(this.scontact);
  }

}
