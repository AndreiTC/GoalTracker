import { User } from 'src/app/shared/models/user.model';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
constructor(private http: HttpClient) {}

    logIn(user: User) {
        const jsonUser = JSON.stringify(user);
        const authenticateUrl = 'https://localhost:44362/api/User/login';
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-type', 'application/json-patch+json');
        return this.http.post(authenticateUrl, jsonUser, {headers: headers})
        .pipe(map((response: User) => {
            if (response && response.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(response));
            }
            return response;
        }));
    }
    signIn(user: User) {
        const jsonUser = JSON.stringify(user);
        const authenticateUrl = 'https://localhost:44362/api/User/signin';
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-type', 'application/json-patch+json');
        return this.http.post(authenticateUrl, jsonUser, {headers: headers})
        .pipe(map((response: object) => {
            return response;
        }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    recoverPassword(user: User) {
        return Promise.resolve(User);
    }
}
