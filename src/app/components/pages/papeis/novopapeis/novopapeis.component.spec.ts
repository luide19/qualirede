import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovopapeisComponent } from './novopapeis.component';

describe('NovopapeisComponent', () => {
  let component: NovopapeisComponent;
  let fixture: ComponentFixture<NovopapeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovopapeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovopapeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
