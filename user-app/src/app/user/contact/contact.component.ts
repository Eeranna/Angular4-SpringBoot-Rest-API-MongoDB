import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: any;

  /*private apiUrl = 'http://localhost:8080/contacts';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get(this.apiUrl).subscribe(data => {
      this.contacts = data;
    });
  }*/
  constructor(private contactService: ContactService) { }
  ngOnInit() {
    this.getContacts();
  }
  getContacts() {
    this.contactService.findAll().subscribe(data => {
        this.contacts = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
