import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {

  private _http = inject(HttpClient)

  sendContact(newContact: Contact): Observable<Contact> {
    return this._http.post<Contact>('https://formspree.io/f/xjkbvglo', newContact)
  }
}
