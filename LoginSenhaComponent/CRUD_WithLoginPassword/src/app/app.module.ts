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
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    AuthModule,
    SharedModule,
    PessoaModule,
    BrowserModule,
    AppRoutingModule,
    EnderecoModule,
    CidadeModule,
    EstadoModule,
    NgbModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
