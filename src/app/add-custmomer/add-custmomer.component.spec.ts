import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustmomerComponent } from './add-custmomer.component';

describe('AddCustmomerComponent', () => {
  let component: AddCustmomerComponent;
  let fixture: ComponentFixture<AddCustmomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustmomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustmomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
