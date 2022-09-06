import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { ModalCidadesComponent } from '../modal-cidades/modal-cidades.component';
import { CidadeService } from '../service/cidade.service';

@Component({
  selector: 'app-listar-cidades',
  templateUrl: './listar-cidades.component.html',
  styleUrls: ['./listar-cidades.component.css'],
})
export class ListarCidadesComponent implements OnInit {
  cidades: Cidade[] = [];

  constructor(
    private cidadeService: CidadeService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.cidades = this.listarTodas();
  }
  listarTodas(): Cidade[] {
    return this.cidadeService.listarTodas();
  }
  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a Cidade: ${cidade.nome}?`)) {
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodas();
    }
  }

  abrirModalCidades(cidade: Cidade): void {
    const modalRef = this.modalService.open(ModalCidadesComponent);
    modalRef.componentInstance.cidade = cidade;
  }
}
