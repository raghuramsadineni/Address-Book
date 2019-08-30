import { Injectable } from '@angular/core';
import {ContactView} from '../models/contactview';
import {Contact,contacts} from '../models/contact';
import {BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactslistService {
  scontact:Contact;
  private c = new BehaviorSubject<Contact>(this.scontact);
  selectedcontact=this.c.asObservable()
  contactlist:ContactView[];
  private cl=new BehaviorSubject<ContactView[]>(this.contactlist);
  conl=this.cl.asObservable();
  constructor(private http:HttpClient) {
    
   }
  get(){
    this.http.get("https://localhost:44346/api/values").subscribe(val=>{
      this.cl.next(<ContactView[]>val);
    });
  }
  selectedContact(id:number){
    this.http.get("https://localhost:44346/api/values/"+id).subscribe(val=>{
      this.c.next(<Contact>val);
    });
  }

}
