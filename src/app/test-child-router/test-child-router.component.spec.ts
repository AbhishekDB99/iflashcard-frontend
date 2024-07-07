import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChildRouterComponent } from './test-child-router.component';

describe('TestChildRouterComponent', () => {
  let component: TestChildRouterComponent;
  let fixture: ComponentFixture<TestChildRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestChildRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChildRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
