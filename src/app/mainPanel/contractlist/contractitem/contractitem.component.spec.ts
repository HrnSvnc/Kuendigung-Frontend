import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractitemComponent } from './contractitem.component';

describe('ContractitemComponent', () => {
  let component: ContractitemComponent;
  let fixture: ComponentFixture<ContractitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
