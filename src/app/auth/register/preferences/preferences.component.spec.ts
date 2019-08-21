import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityConfirmComponent } from './preferences.component';

describe('IdentityConfirmComponent', () => {
  let component: IdentityConfirmComponent;
  let fixture: ComponentFixture<IdentityConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
