import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmpService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/employee/getAllEmployee';
  baseUrlApi: string = 'http://localhost:8080/employee';

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }
  addRecord(employeeRecord) {
    return this.http.post(this.baseUrlApi, employeeRecord)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  updateRecord(employeeRecord) {
    return this.http.put(this.baseUrlApi, employeeRecord)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteRecord(id) {
    return this.http.delete(this.baseUrlApi + '/' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
