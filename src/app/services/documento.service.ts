import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documento } from '../models/documento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private readonly API = 'http://localhost:8080/documentos';
  constructor(private http: HttpClient) {}
  
  obterDocumentos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.API);
  }

  cadastrarDocumento(documento: Documento): Observable<Documento> {
    // Certifique-se de que o tipo de conteúdo seja JSON
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Envia o objeto como JSON
    return this.http.post<Documento>(this.API, documento, { headers });
  }
 
}
