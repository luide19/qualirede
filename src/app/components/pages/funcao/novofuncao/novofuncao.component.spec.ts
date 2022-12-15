import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovofuncaoComponent } from './novofuncao.component';

describe('NovofuncaoComponent', () => {
  let component: NovofuncaoComponent;
  let fixture: ComponentFixture<NovofuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovofuncaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovofuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
