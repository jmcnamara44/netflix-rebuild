import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdOnlyComponent } from './dvd-only.component';

describe('DvdOnlyComponent', () => {
  let component: DvdOnlyComponent;
  let fixture: ComponentFixture<DvdOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
