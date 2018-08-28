import { Component, OnInit } from '@angular/core';
import {EmpService} from './emp.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  users = [];
  message = '';
  p : number = 1;
  formTitle: string = 'Add';
  employeeRecord = {
    '_id': '',
    'id': '',
    'firstName': '',
    'mname': '',
    'lastName': '',
    'dept': '',
    'email': '',
    'salary': '',
    'city': '',
  };
  constructor(private empService: EmpService) { }
  ngOnInit() {
    this.displayEmployeeList();
  }
  displayEmployeeList() {
    this.empService.getUsers()
      .subscribe(
        data => this.users = data,
        error => this.message = error,
      );
  }
  addRecord() {
    this.formTitle = 'Add';
    this.showForm();
  }
  showForm() {
    document.getElementById('formSection').style.visibility = 'visible';
  }

  updateRecord(employee) {
    this.formTitle = 'Update';
    this.employeeRecord = employee;
    this.showForm();
  }

  onSave() {
    if (this.formTitle === 'Add') {
      this.empService.addRecord(this.employeeRecord).subscribe();
    } else if (this.formTitle === 'Update') {
      this.empService.updateRecord(this.employeeRecord).subscribe();
    }
    this.hideForm();
    this.displayEmployeeList();
  }

  onClose() {
    this.hideForm();
  }

  // hide and clean form
  hideForm() {
    this.cleanForm();
    document.getElementById('formSection').style.visibility = 'hidden';
  }

  cleanForm() {
    this.employeeRecord = {
      '_id': '',
      'id': '',
      'firstName': '',
      'mname': '',
      'lastName': '',
      'dept': '',
      'email': '',
      'salary': '',
      'city': '',
    }
  }
  deleteRecord(id) {
    this.empService.deleteRecord(id).subscribe();
    this.displayEmployeeList();
  }
  key : string = 'firstName';
  reverse : boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = this.reverse;
  }
}
