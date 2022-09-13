import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EnderecoModule } from './endereco/endereco.module';
import { CidadeModule } from './cidade/cidade.module';
import { EstadoModule } from './estado/estado.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from './shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    PessoaModule,
    BrowserModule,
    AppRoutingModule,
    EnderecoModule,
    CidadeModule,
    EstadoModule,
    NgbModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
