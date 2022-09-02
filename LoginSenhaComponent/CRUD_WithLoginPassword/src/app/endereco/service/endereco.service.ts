import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { Endereco } from 'src/app/shared/models/endereco.model';

const LS_CHAVE_END: string = 'enderecos';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor() {}

  listarTodosEnderecos(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE_END];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserirEndereco(endereco: Endereco) {
    const enderecos = this.listarTodosEnderecos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE_END] = JSON.stringify(enderecos);
  }
  remover(id: number): void {
    let enderecos: Endereco[] = this.listarTodosEnderecos();
    enderecos = enderecos.filter((endereco) => endereco !== id);
    localStorage[LS_CHAVE_END] = JSON.stringify(enderecos);
  }
}
