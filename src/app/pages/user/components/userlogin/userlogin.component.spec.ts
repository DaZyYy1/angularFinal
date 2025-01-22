import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userLoginComponent } from './userlogin.component';

describe('UserloginComponent', () => {
  let component: userLoginComponent;
  let fixture: ComponentFixture<userLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [userLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
