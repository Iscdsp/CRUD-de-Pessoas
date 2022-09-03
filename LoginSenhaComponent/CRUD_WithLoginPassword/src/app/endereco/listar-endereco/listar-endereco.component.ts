import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css'],
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit(): void {
    this.enderecos = this.listarTodosEnderecos();
  }

  listarTodosEnderecos(): Endereco[] {
    return this.enderecoService.listarTodosEnderecos();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente removero endereço ${endereco.rua}?`)) {
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodosEnderecos();
    }
  }
}
