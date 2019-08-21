import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  @Input() mobilePhoneNumber: string;
  @Input() mobileCarrierId: Number;
  @Input() prefContactAdjustment: string;
  @Input() prefContactApproval: string;
  @Input() prefContactPto: string;

  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() next: EventEmitter<object> = new EventEmitter<object>();

  model: any = {};
  loading = false;
  preferencesFormGroup: FormGroup;
  //objectKeys = Object.keys;
  //mobileCarrierIds = { '1': 'Airtel', '2': 'Etisalat', '3': 'GLO', '4': 'MTN', '5': 'Smile' };

  mobileCarriers = [
    {key: 1, value: 'Airtel'},
    {key: 2, value: 'Etisalat'},
    {key: 3, value: 'GLO'},
    {key: 4, value:'MTN'},
    {key: 5, value:'Smile'},
  ];
  prefContactAdjustments = [
    {key: '1', value: 'None'},
    {key: '2', value: 'Email'},
    {key: '3', value: 'Text'},
    {key: '4', value: 'Both'},
  ];
  prefContactApprovals = [
    {key: '1', value: 'None'},
    {key: '2', value: 'Email'},
    {key: '3', value: 'Text'},
    {key: '4', value: 'Both'},
  ];
  prefContactPtos = [
    {key: '1', value: 'None'},
    {key: '2', value: 'Email'},
    {key: '3', value: 'Text'},
    {key: '4', value: 'Both'},
  ];

  constructor(
    private frb: FormBuilder,
  ) {
    this.preferencesFormGroup = this.frb.group({
      mobilePhoneNumber: ['', Validators.required],
      mobileCarrierId: ['', Validators.required],
      prefContactAdjustment: ['', Validators.required],
      prefContactApproval: ['', Validators.required],
      prefContactPto: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  onNext() {
    this.next.emit({
      type: 'finish',
    });
    
  }

  onBackButtonPress() {
    this.next.emit({
      type: 'back',
    });
  }

  onMobilePhoneNumberValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.mobilePhoneNumber) {
      this.notify.emit({
        type: 'mobilePhoneNumber',
        payload: sanitizedVal,
      });
    }
  }

  onMobileCarrierIdValueChange(value = '') {
    const sanitizedVal = Number(value.trim());
    if (sanitizedVal !== this.mobileCarrierId) {
      this.notify.emit({
        type: 'mobileCarrierId',
        payload: sanitizedVal,
      });
    }
  }

  onPrefContactAdjustmentValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.prefContactAdjustment) {
      this.notify.emit({
        type: 'prefContactAdjustment',
        payload: sanitizedVal,
      });
    }
  }

  onPrefContactApprovalValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.prefContactApproval) {
      this.notify.emit({
        type: 'prefContactApproval',
        payload: sanitizedVal,
      });
    }
  }

  onPrefContactPtoValueChange(value = '') {
    const sanitizedVal = value.trim();
    if (sanitizedVal !== this.prefContactPto) {
      this.notify.emit({
        type: 'prefContactPto',
        payload: sanitizedVal,
      });
    }
  }

}
