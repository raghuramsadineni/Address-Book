import { Injectable } from '@angular/core';
import {Contact,contacts} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactslistService {

  constructor() { }
  get(){
    return contacts;
  }
}
