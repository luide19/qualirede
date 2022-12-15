import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosistemaComponent } from './novosistema.component';

describe('NovosistemaComponent', () => {
  let component: NovosistemaComponent;
  let fixture: ComponentFixture<NovosistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovosistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovosistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
