import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
 
import { CustomValidators } from '../../custom.validators';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  @Input() email:string;
  @Input() password:string;
  @Input() confirmPassword:string;

  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() next: EventEmitter<object> = new EventEmitter<object>();
  
  model: any = {};
  loading = false;
  
  userRegFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.passwordFormGroup = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: CustomValidators.validate.bind(this)
    });
    this.userRegFormGroup = this.fb.group({
      email: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    })
   }

  ngOnInit() {
  }

  onNext() {
    // this.router.navigate(['settings']);
    this.next.emit({
      type: 'next',
      // value: 'userReg',
    });
  }

  onEmailValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.email) {
      this.notify.emit({
        type: 'email',
        payload: sanitizedVal,
      });
    }
  }

  onPasswordValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.password) {
      this.notify.emit({
        type: 'password',
        payload: sanitizedVal,
      });
    }
  }

  onConfirmPasswordValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.confirmPassword) {
      this.notify.emit({
        type: 'confirmPassword',
        payload: sanitizedVal,
      });
    }
  }
}
