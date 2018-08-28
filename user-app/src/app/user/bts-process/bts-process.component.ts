import { Component, OnInit } from '@angular/core';
import {BtsProcessService} from "./bts-process.service";

@Component({
  selector: 'app-bts-process',
  templateUrl: './bts-process.component.html',
  styleUrls: ['./bts-process.component.css']
})
export class BtsProcessComponent implements OnInit {

  btsprocess: any;

  constructor(private btsProcessService: BtsProcessService) { }

  ngOnInit() {
    this.getBtsProcess();
  }
  getBtsProcess() {
    this.btsProcessService.findAll().subscribe(data => {
        this.btsprocess = data;
      },
      err => {
        console.log(err);
      }
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
