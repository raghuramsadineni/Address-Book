import { Injectable } from '@angular/core';
import {Contact,contacts} from '../models/contact';
import {ContactView} from '../models/contactview';
@Injectable({
  providedIn: 'root'
})
export class ContactoperationsService {

  constructor() { }
  add(con:Contact){
    con.id=contacts[contacts.length-1].id+1
    contacts.push(con);
  }
  delete(id){
    for (var li =contacts.length;li--;)
    {
      if(contacts[li].id==id)
      {
        contacts.splice(Number(li),1);
        break;
      }
    }
    console.log(contacts);
  }
  contactList(){
    return contacts;
  }
  edit(con:Contact,id:number){
    contacts[id]=con;
  }
}
