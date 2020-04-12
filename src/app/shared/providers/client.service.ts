import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly API_URL: string = environment.apiURL;

  constructor( private http: HttpClient) {}

  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.API_URL + '/clients');
  }


}