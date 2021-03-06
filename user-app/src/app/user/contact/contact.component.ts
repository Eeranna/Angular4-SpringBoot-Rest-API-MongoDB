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
  otps = [];
  softwares: any;
  message = '';
  id: number;
  name: string;
  address: string;
  city: string;
  phone: number;
  email: string;
  otp: string;

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
  getOtp(){
    this.contactService.getOtp()
      .subscribe(
        data => this.otps = data,
        error => this.message = error,
      );
  }
  getSoftwares(){
    this.contactService.getSoftwares()
      .subscribe(
        data => this.softwares = data,
        error => this.message = error,
      );
  }
  p : number = 1;
  key : string = 'name';
  reverse : boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = this.reverse;
  }

}
