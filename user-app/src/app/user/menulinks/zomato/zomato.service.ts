import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ZomatoService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/zomato/getZomatoDetails';

  getZomatoDetails() {
    return this.http.get<any>(this.baseUrl);
  }

}
