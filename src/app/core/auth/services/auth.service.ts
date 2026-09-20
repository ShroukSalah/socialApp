import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataResponse } from '../models/user-data.interface';
import { environment } from '../../../../environments/environment.development';

@Service()
export class AuthService {
    private readonly httpClient = inject(HttpClient)

    sendRegisterData(data: object): Observable<UserDataResponse> {
        return this.httpClient.post<UserDataResponse>(environment.base_url + "/users/signup", data)
    }

    sendLoginData(data: object): Observable<UserDataResponse> {
        return this.httpClient.post<UserDataResponse>(environment.base_url + "/users/signin", data)
    }

}
