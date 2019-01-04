import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaliteDetailComponent } from './codalite-detail.component';

describe('CodaliteDetailComponent', () => {
  let component: CodaliteDetailComponent;
  let fixture: ComponentFixture<CodaliteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodaliteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaliteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
