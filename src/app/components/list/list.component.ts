import { Component, inject } from '@angular/core';
import { DocumentoService } from '../../services/documento.service';
import { Documento } from '../../models/documento';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  documentos: Documento[] = [];

  constructor(private documentoService: DocumentoService) {}

  ngOnInit(): void {
    this.documentoService.obterContatos().subscribe((documentos) => {
      this.documentos = documentos;
    });
  }

}
