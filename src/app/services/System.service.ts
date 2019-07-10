import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SystemService {

    baseUrl = 'http://localhost:3000/api';


constructor(private httpClient: HttpClient) {}

ping() {
 return this.httpClient.get(this.baseUrl + '/system/ping', { withCredentials: true });
}

uploadCard(selectedFile: File, password: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'multipart/form-data');

    const fd = new FormData();
    fd.append('card', selectedFile);

    return this.httpClient.post(this.baseUrl + '/wallet/import?name=' + password, fd, {withCredentials: true, headers, });
    }

}

