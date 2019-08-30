import { Injectable } from '@angular/core';
import {Contact,contacts} from '../models/contact';
import {ContactView} from '../models/contactview';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactslistService } from './contactslist.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoperationsService {

  constructor(private http:HttpClient,private contactlistService:ContactslistService) { }
  add(con:Contact){
    this.http.post("https://localhost:44346/api/values",con).subscribe(res=>{
      this.contactlistService.get()
    });
  }
  delete(con:Contact){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: con,
    };
    let url="https://localhost:44346/api/values/"+con.id
    this.http.delete(url,options).subscribe(res=>{
      this.contactlistService.get()
    });
  }
  contactList(){
    return contacts;
  }
  edit(con:Contact,id:number){
    con.id=id;
    let x="https://localhost:44346/api/values/"+id
    this.http.put(x,con).subscribe(res=>{
      this.contactlistService.get()
    });
  }
}
