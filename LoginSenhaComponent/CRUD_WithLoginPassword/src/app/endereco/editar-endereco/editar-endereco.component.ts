import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade/service/cidade.service';
import { Cidade } from 'src/app/shared';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css'],
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;

  endereco!: Endereco;
  cidades: Cidade[] = [];

  constructor(
    private cidadeService: CidadeService,
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cidades = this.cidadeService.listarTodas();

    let id = +this.route.snapshot.params['id'];
    const res = this.enderecoService.buscarPorId(id);
    if (res !== undefined) {
      this.endereco = res;
    } else {
      throw new Error('Endereço não encontrado!: id = ' + id);
    }
  }
  atualizar(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.atualizarEnderecos(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
