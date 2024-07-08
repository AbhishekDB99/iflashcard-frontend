import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildPageComponent } from './wild-page.component';

describe('WildPageComponent', () => {
  let component: WildPageComponent;
  let fixture: ComponentFixture<WildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
