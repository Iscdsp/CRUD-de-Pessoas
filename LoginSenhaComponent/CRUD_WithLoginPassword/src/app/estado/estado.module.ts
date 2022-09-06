import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { EstadoService } from './service/estado.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent,
    ModalEstadoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [EstadoService],
})
export class EstadoModule {}
