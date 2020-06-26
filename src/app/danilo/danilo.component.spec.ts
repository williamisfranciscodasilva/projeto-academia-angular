import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniloComponent } from './danilo.component';

describe('DaniloComponent', () => {
  let component: DaniloComponent;
  let fixture: ComponentFixture<DaniloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaniloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
