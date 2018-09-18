import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ContactService} from "../contact/contact.service";
import {Contact} from "../contact/Contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact: Contact;
  userForm: FormGroup;
  id: number;
  private sub: any;
  contacts: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  private apiUrl = 'http://localhost:8080/contacts/';

  ngOnInit() {
   // this.getContact(this.route.snapshot.params['id']);

   this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.userForm = new FormGroup({
      id: new FormControl({value: '', disabled: true}, Validators.required),
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      otp: new FormControl('', Validators.required)
    });

    if (this.id) { // edit form
      this.contactService.findById(this.id).subscribe(
        contact => {
          this.userForm.patchValue({
            id: contact.id,
            name: contact.name,
            address: contact.address,
            city: contact.city,
            phone: contact.phone,
            email: contact.email
          });
        }, error => {
          console.log(error);
        }
      );
    }
  }

/*getContact(id) {
    this.contactService.findById(id).subscribe(data => {
      this.contacts = data;
    });
  }*/

updateContact() {
  let contact: Contact = new Contact(
    this.userForm.controls['id'].value,
    this.userForm.controls['name'].value,
    this.userForm.controls['address'].value,
    this.userForm.controls['city'].value,
    this.userForm.controls['phone'].value,
    this.userForm.controls['email'].value,
    this.userForm.controls['otp'].value,);

  this.contactService.updateContact(contact).subscribe();
  this.router.navigate(['/contacts']);
}

  /*updateContact(id, data) {
    this.http.put(this.apiUrl +id, data)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/contact-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }*/
  redirectTopicPage() {
    this.router.navigate(['/contacts']);
  }

}
