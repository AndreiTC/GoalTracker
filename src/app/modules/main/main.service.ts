import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/shared/models/task.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('https://localhost:44368/api/User/getAllUsers');
  }

  addTask(task: Task) {
    const jsonTask = JSON.stringify(task);
    const authenticateUrl = 'https://localhost:44362/api/Task';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-type', 'application/json-patch+json');
    return this.http.post(authenticateUrl, jsonTask, {headers: headers})
    .pipe(map((response: object) => {
        return response;
    }));
  }
  getTasks(userId: number) {
    const authenticateUrl = 'https://localhost:44362/api/Task/';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-type', 'application/json-patch+json');
    return this.http.get(authenticateUrl + userId, {headers: headers})
    .pipe(map((response: Array<Task>) => {
        return response;
    }));
  }
}
