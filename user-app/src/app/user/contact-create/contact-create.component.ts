import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ContactService} from "../contact/contact.service";
import {Contact} from "../contact/Contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  // contact = {};
  userForm: FormGroup;
  name: string;
  contact: Contact;
  private sub: any;

  constructor(private http: HttpClient, private router: Router, private contactService: ContactService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")])
    });
  }

  /*saveContact() {
    this.http.post('/contacts', this.contact)
      .subscribe(res => {
          this.router.navigate(['/contact-detail', res]);
        }, (err) => {
          console.log(err);
        }
      );
  }*/

  saveContact() {
        let contact: Contact = new Contact(
          this.userForm.controls['name'].value,
          this.userForm.controls['address'].value,
          this.userForm.controls['city'].value,
          this.userForm.controls['phone'].value,
          this.userForm.controls['email'].value);

        this.contactService.saveContact(contact).subscribe();
        this.router.navigate(['/contacts']);
  }
  redirectTopicPage() {
    this.router.navigate(['/contacts']);
  }

}
