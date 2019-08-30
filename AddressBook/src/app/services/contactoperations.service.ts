import { Injectable } from '@angular/core';
import {Contact,contacts} from '../models/contact';
import {ContactView} from '../models/contactview';
import { HttpClient } from '@angular/common/http';
import { ContactslistService } from './contactslist.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoperationsService {

  constructor(private http:HttpClient,private contactlistService:ContactslistService) { }
  add(con:Contact){
    this.http.post("https://localhost:44346/api/values",con).subscribe(res=>{
      console.log("add");
    });
  }
  delete(con:Contact){
    this.http.delete("https://localhost:44346/api/values/"+con.id).subscribe(res=>{
      console.log("delete");
    });
  }
  contactList(){
    return contacts;
  }
  edit(con:Contact,id:number){
    this.http.put("https://localhost:44346/api/values/"+con.id,con).subscribe(res=>{
      console.log("edit");
    });
  }
}
