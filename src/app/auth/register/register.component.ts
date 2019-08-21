import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UserRegComponent } from './user-reg/user-reg.component';

import { UserService } from '../index';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // directives: [UserRegComponent],
})
export class RegisterComponent implements OnInit {

  model: any = {};
  loading = false;
  
  // multiform data
  step: number = 1;
  // login form data holder
  login = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  settings = {
    firstName: '',
    lastName: '',
    pin: null,
    memberCode: ''
  };

  preferences = {
    mobilePhoneNumber: '',
    mobileCarrierId: 1,
    prefContactAdjustment: '',
    prefContactApproval: '',
    prefContactPto: ''
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
  }

  onLoginDataNotify(data) {
    const { type, payload } = data;
    this.login[type] = payload;
  }

  onSettingDataNotify(data) {
    const { type, payload } = data;
    this.settings[type] = payload;
  }

  onPreferenceDataNotify(data) {
    const { type, payload } = data;
    this.preferences[type] = payload;
  }

  onNext(data) {
    switch (data.type) {
      case 'back':
        this.step -= 1;
        break;
      case 'next':
        this.step += 1;
        break;
      case 'finish':
        this.register();
        break;
    }
  }

  register() {
    this.loading = true;
    this.model = {
      ...this.login,
      ...this.settings,
      ...this.preferences
    }
    delete this.model.confirmPassword;
    // console.log('Data: ', this.model);
    this.userService.create(this.model)
    .subscribe(
      data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful!', true);
          // console.log('Registration successful');
          this.router.navigate(['/dashboard']);
      },
      error => {
        // console.log('Error', error);
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
