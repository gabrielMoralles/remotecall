import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleClassroomComponent } from './flexible-classroom.component';

describe('FlexibleClassroomComponent', () => {
  let component: FlexibleClassroomComponent;
  let fixture: ComponentFixture<FlexibleClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexibleClassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
