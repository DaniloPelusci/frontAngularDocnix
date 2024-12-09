export interface Documento {
    id?: number;
    titulo: string;
    descricao: string;
    versao: number;
    sigla: string;
    fase: 'Minuta' | 'Vigente' | 'Obsoleto';
  }
  
