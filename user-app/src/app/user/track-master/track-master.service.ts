import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {TrackMaster} from "./track-master";

@Injectable()
export class TrackMasterService {

  private apiUrl = 'http://localhost:8080/getAllTracks';
  tracks: any;
  constructor(private http: Http) { }

  findAll(): Observable<TrackMaster[]>  {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
