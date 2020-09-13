import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

const baseUrl = `${environment.apiUrl}/users`;

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // tslint:disable-next-line: typedef
    getAll() {
        return this.http.get<User[]>(baseUrl);
    }

    // tslint:disable-next-line: typedef
    getById(id: string) {
        return this.http.get<User>(`${baseUrl}/${id}`);
    }

    // tslint:disable-next-line: typedef
    create(params) {
        return this.http.post(baseUrl, params);
    }

    // tslint:disable-next-line: typedef
    update(id: string, params) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    // tslint:disable-next-line: typedef
    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}
