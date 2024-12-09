
import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CriarDocumentoComponent } from './components/criar-documento/criar-documento.component';

export const routes: Routes = [
    {
    path:"list",
    component: ListComponent
    },
    {
        path:"criarDocumento",
        component: CriarDocumentoComponent
    },
    {
        path:"",
        component: ListComponent
        }
];
