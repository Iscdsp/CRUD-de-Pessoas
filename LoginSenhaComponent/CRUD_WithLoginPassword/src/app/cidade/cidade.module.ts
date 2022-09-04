import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadesComponent } from './listar-cidades/listar-cidades.component';
import { InserirCidadesComponent } from './inserir-cidades/inserir-cidades.component';
import { EditarCidadesComponent } from './editar-cidades/editar-cidades.component';
import { CidadeService } from './service/cidade.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarCidadesComponent,
    InserirCidadesComponent,
    EditarCidadesComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CidadeService],
})
export class CidadeModule {}
