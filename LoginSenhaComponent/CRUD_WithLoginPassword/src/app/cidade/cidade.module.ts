import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadesComponent } from './listar-cidades/listar-cidades.component';
import { InserirCidadesComponent } from './inserir-cidades/inserir-cidades.component';
import { EditarCidadesComponent } from './editar-cidades/editar-cidades.component';
import { CidadeService } from './service/cidade.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalCidadesComponent } from './modal-cidades/modal-cidades.component';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../shared';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ListarCidadesComponent,
    InserirCidadesComponent,
    EditarCidadesComponent,
    ModalCidadesComponent,
  ],
  imports: [
    NgSelectModule,
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [CidadeService],
})
export class CidadeModule {}
