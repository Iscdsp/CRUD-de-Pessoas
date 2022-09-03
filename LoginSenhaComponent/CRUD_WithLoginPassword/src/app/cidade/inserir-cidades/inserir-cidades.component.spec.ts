import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCidadesComponent } from './inserir-cidades.component';

describe('InserirCidadesComponent', () => {
  let component: InserirCidadesComponent;
  let fixture: ComponentFixture<InserirCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirCidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
