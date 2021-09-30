import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSucursalComponent } from './consulta-sucursal.component';

describe('ConsultaSucursalComponent', () => {
  let component: ConsultaSucursalComponent;
  let fixture: ComponentFixture<ConsultaSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
