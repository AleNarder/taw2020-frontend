import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionsComponent } from './insertions.component';

describe('InsertionsComponent', () => {
  let component: InsertionsComponent;
  let fixture: ComponentFixture<InsertionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
