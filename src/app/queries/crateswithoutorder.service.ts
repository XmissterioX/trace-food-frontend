import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crate } from '../components/supplier/pages/new-order-supplier/crate';

@Injectable()
export class QueriesService {

    baseUrl = 'http://localhost:3000/api';


constructor(private httpClient: HttpClient) {}

getUnownedCrates() {
 return this.httpClient.get<Crate[]>(this.baseUrl + '/queries/CratesWithoutOrder?owned=false', { withCredentials: true });
}



}

