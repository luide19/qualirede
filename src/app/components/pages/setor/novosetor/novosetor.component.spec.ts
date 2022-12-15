import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosetorComponent } from './novosetor.component';

describe('NovosetorComponent', () => {
  let component: NovosetorComponent;
  let fixture: ComponentFixture<NovosetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovosetorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovosetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
