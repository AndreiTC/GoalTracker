import { User } from 'src/app/shared/models/user.model';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
constructor(private http: HttpClient) {}

    logIn(user: any) {
        const authenticateUrl = 'https://localhost:44368/api/User/login';
        return this.http.post(authenticateUrl, user)
        .pipe(map((response: any) => {
            if (response && response.token) {
                localStorage.setItem('token', response.token);
            }
            return response;
        }));
    }
    signIn(user: any) {
        const authenticateUrl = 'https://localhost:44368/api/User/register';
        return this.http.post(authenticateUrl, user)
        .pipe(map((response: any) => {
            return response;
        }));
    }

    recoverPassword(user: User) {
        return Promise.resolve(User);
    }
}
