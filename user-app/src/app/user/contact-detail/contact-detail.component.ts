import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from "../contact/contact.service";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contacts: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
  }

 /* getContactDetail(id) {
    this.http.get('/contacts/'+id).subscribe(data => {
      this.contact = data;
    });
  }*/

  getContactDetail(id) {
    this.contactService.findById(id).subscribe(data => {
      this.contacts = data;
    });
  }
  deleteContact(id) {
    this.contactService.deleteContactById(id)
      .subscribe(res => {
          this.router.navigate(['/contacts']);
        }, (err) => {
          console.log(err);
        }
      );
  }
  redirectTopicPage() {
    this.router.navigate(['/contacts']);
  }
}

