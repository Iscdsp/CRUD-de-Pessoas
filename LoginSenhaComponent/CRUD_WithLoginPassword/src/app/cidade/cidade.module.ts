import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadesComponent } from './listar-cidades/listar-cidades.component';
import { InserirCidadesComponent } from './inserir-cidades/inserir-cidades.component';
import { EditarCidadesComponent } from './editar-cidades/editar-cidades.component';



@NgModule({
  declarations: [
    ListarCidadesComponent,
    InserirCidadesComponent,
    EditarCidadesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CidadeModule { }
