import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cidade } from 'src/app/shared';

@Component({
  selector: 'app-modal-cidades',
  templateUrl: './modal-cidades.component.html',
  styleUrls: ['./modal-cidades.component.css'],
})
export class ModalCidadesComponent implements OnInit {
  @Input() cidade!: Cidade;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
