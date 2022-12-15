import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoperfilusuarioComponent } from './novoperfilusuario.component';

describe('NovoperfilusuarioComponent', () => {
  let component: NovoperfilusuarioComponent;
  let fixture: ComponentFixture<NovoperfilusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoperfilusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoperfilusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
