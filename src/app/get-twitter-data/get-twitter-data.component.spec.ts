import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTwitterDataComponent } from './get-twitter-data.component';

describe('GetTwitterDataComponent', () => {
  let component: GetTwitterDataComponent;
  let fixture: ComponentFixture<GetTwitterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTwitterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTwitterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
