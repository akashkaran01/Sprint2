import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestionsByTestidComponent } from './get-questions-by-testid.component';

describe('GetQuestionsByTestidComponent', () => {
  let component: GetQuestionsByTestidComponent;
  let fixture: ComponentFixture<GetQuestionsByTestidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQuestionsByTestidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuestionsByTestidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
