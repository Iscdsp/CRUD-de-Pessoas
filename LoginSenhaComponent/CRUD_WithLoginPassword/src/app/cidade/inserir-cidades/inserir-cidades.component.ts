import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/service/estado.service';
import { Estado } from 'src/app/shared';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../service/cidade.service';

@Component({
  selector: 'app-inserir-cidades',
  templateUrl: './inserir-cidades.component.html',
  styleUrls: ['./inserir-cidades.component.css'],
})
export class InserirCidadesComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private router: Router,
    private estadoService: EstadoService
  ) {}

  ngOnInit(): void {
    this.cidade = new Cidade();
    this.estados = this.estadoService.listarTodos();
  }
  inserir(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
