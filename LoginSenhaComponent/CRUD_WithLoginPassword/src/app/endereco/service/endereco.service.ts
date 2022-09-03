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

  buscarPorId(id: number): Endereco | undefined {
    const enderecos: Endereco[] = this.listarTodosEnderecos();
    return enderecos.find((endereco) => endereco.id === id);
  }
  inserirEndereco(endereco: Endereco) {
    const enderecos = this.listarTodosEnderecos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE_END] = JSON.stringify(enderecos);
  }
  atualizarEnderecos(endereco: Endereco): void {
    const enderecos: Endereco[] = this.listarTodosEnderecos();
    enderecos.forEach((obj, index, objs) => {
      if (endereco.id === obj.id) {
        objs[index] = endereco;
      }
    });
    localStorage[LS_CHAVE_END] = JSON.stringify(enderecos);
  }

  remover(id: number): void {
    let enderecos: Endereco[] = this.listarTodosEnderecos();
    enderecos = enderecos.filter((endereco) => endereco.id !== id);
    localStorage[LS_CHAVE_END] = JSON.stringify(enderecos);
  }
}
