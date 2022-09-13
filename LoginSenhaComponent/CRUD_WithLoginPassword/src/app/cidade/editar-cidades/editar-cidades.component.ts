import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/service/estado.service';
import { Estado } from 'src/app/shared';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../service/cidade.service';

@Component({
  selector: 'app-editar-cidades',
  templateUrl: './editar-cidades.component.html',
  styleUrls: ['./editar-cidades.component.css'],
})
export class EditarCidadesComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router,
    private estadoService: EstadoService
  ) {}

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();

    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarPorId(id);
    if (res !== undefined) {
      this.cidade = res;
    } else {
      throw new Error('Cidade não encontrada!: id = ' + id);
    }
  }

  atualizar(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
