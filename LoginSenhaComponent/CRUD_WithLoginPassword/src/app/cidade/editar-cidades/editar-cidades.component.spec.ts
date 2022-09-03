import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCidadesComponent } from './editar-cidades.component';

describe('EditarCidadesComponent', () => {
  let component: EditarCidadesComponent;
  let fixture: ComponentFixture<EditarCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
