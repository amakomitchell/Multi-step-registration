import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
 
import { AuthenticationService } from '../index';
import { AlertService } from '../../shared/services/alert.service';

@Component({
    selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  model: any = {};
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if(this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
          this.router.navigate([this.returnUrl]);
          },
          error => {
          this.alertService.error(error);
          this.loading = false;
          });
  }
}
