import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DocumentoService } from '../../services/documento.service';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Documento } from '../../models/documento';


@Component({
  selector: 'app-criar-documento',
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-documento.component.html',
  styleUrl: './criar-documento.component.css'
})
export class CriarDocumentoComponent {
  formDocumento!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private documentoService: DocumentoService
  ) {}

  ngOnInit(): void {
    this.formDocumento = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      versao: [1, [Validators.required, Validators.min(1)]],
      sigla: ['', Validators.required],
      fase: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formDocumento.valid) {
      const documento: Documento = this.formDocumento.value;
      this.documentoService.cadastrarDocumento(documento).subscribe(response => {
        alert('Documento cadastrado com sucesso!');
        this.formDocumento.reset();
      }, error => {
        console.error('Erro ao cadastrar documento', error);
        alert('Erro ao cadastrar o documento');
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
