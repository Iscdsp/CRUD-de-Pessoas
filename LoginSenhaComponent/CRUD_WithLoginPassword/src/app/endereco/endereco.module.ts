import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EnderecoService } from './service/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent,
    ModalEnderecoComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(),
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [EnderecoService],
})
export class EnderecoModule {}
