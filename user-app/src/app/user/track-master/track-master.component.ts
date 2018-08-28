import { Component, OnInit } from '@angular/core';
import {TrackMasterService} from "./track-master.service";

@Component({
  selector: 'app-track-master',
  templateUrl: './track-master.component.html',
  styleUrls: ['./track-master.component.css']
})
export class TrackMasterComponent implements OnInit {

  tracks: any;

  constructor(private trackMasterService: TrackMasterService) { }

  ngOnInit() {
    this.getTracks();
  }
  getTracks() {
    this.trackMasterService.findAll().subscribe(data => {
        this.tracks = data;
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
