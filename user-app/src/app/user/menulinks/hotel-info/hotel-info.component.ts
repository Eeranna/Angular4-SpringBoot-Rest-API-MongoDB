import { Component, OnInit } from '@angular/core';
import {HotelService} from './hotel.service';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {

  hotels = [];
  message = '';
  p : number = 1;
  constructor(private hotelService: HotelService) { }
  ngOnInit() {
    this.displayHotelList();
  }
  displayHotelList() {
    this.hotelService.getHotels()
      .subscribe(
        data => this.hotels = data,
        error => this.message = error
      );
  }
  key : string = 'country';
  reverse : boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = this.reverse;
  }

}
