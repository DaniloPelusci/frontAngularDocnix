import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from '../models/documento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private readonly API = 'http://localhost:8080/documentos';
  constructor(private http: HttpClient) {}
  
  obterContatos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.API);
  }
}
