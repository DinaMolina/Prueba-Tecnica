import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente, Resultado } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class CanalService {
  private url: string = "https://f27c-144-202-100-18.ngrok.io/smartbot/api/test";

  constructor(private http: HttpClient) { }
  
  resultado( client: Cliente ): Observable<Resultado> {
    return this.http.post<Resultado>(`${ this.url }`, client );
  }
}
