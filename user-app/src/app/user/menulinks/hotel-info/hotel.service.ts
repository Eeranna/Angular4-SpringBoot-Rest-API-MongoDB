import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/hotel/getAllHotels';

  getHotels() {
    return this.http.get<any>(this.baseUrl);
  }
}
