import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Http, Response} from '@angular/http';
import {Contact} from "./Contact";
import {Router} from "@angular/router";

@Injectable()
export class ContactService {

  private apiUrl = 'http://localhost:8080/contacts';
  contacts: any;
  constructor(private http: Http, private router: Router) { }

  findAll(): Observable<Contact[]>  {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Contact> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveContact(contact: Contact): Observable<Response> {
    return this.http.post(this.apiUrl, contact)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put(this.apiUrl, contact)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteContactById(id: number): Observable<Response> {
    return this.http.delete(this.apiUrl + '/' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
