import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCidadesComponent } from './modal-cidades.component';

describe('ModalCidadesComponent', () => {
  let component: ModalCidadesComponent;
  let fixture: ComponentFixture<ModalCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
