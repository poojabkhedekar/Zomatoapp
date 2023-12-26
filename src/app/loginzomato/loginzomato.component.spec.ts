import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginzomatoComponent } from './loginzomato.component';

describe('LoginzomatoComponent', () => {
  let component: LoginzomatoComponent;
  let fixture: ComponentFixture<LoginzomatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginzomatoComponent]
    });
    fixture = TestBed.createComponent(LoginzomatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
