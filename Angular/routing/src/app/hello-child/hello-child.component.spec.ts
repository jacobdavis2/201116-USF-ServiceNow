import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloChildComponent } from './hello-child.component';

describe('HelloChildComponent', () => {
  let component: HelloChildComponent;
  let fixture: ComponentFixture<HelloChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
