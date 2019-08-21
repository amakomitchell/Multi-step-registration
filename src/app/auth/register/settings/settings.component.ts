 import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
 import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 

 @Component({
   selector: 'app-settings',
   templateUrl: './settings.component.html',
   styleUrls: ['./settings.component.css'],
   encapsulation: ViewEncapsulation.None
 })
 export class SettingsComponent implements OnInit {

  @Input() firstName:string;
  @Input() lastName:string;
  @Input() pin: number;
  @Input() memberCode: string;

  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() next: EventEmitter<object> = new EventEmitter<object>();

    model: any = {};
    loading = false;
    returnUrl: string;

    settingsFormGroup: FormGroup;


  constructor(
    private frmBuilder: FormBuilder) {
      this.settingsFormGroup = this.frmBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        pin: ['', Validators.required],
        memberCode: ['', Validators.required]
      })
     }

  ngOnInit() {
    
  }

  onNext() {
    this.next.emit({
      type: 'next',
    });
  }

  onBackButtonPress() {
    this.next.emit({
      type: 'back',
    });
  }

  onfirstNameValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.firstName) {
      this.notify.emit({
        type: 'firstName',
        payload: sanitizedVal,
      });
    }
  }

  onlastNameValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.lastName) {
      this.notify.emit({
        type: 'lastName',
        payload: sanitizedVal,
      });
    }
  }

  onPinValueChange(value = '') {
    const sanitizedVal = Number(value.trim());
    if (sanitizedVal !== this.pin) {
      this.notify.emit({
        type: 'pin',
        payload: sanitizedVal,
      });
    }
  }

  onMemberCodeValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.memberCode) {
      this.notify.emit({
        type: 'memberCode',
        payload: sanitizedVal,
      });
    }
  }
 }
