import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

export class CustomValidators {
    static validate(userRegFormGroup: FormGroup) {
        let password = userRegFormGroup.controls.password.value;
        let confirmPassword = userRegFormGroup.controls.confirmPassword.value;

        if(confirmPassword.length <= 0) {
            return null;
        }
        if(confirmPassword !== password) {
            return {
                doesMatchPassword : true
            };
        }
        return null;
        
    }
    static emailValidate(control: FormControl) {
        let email = control.value;
        if(email && email.indexOf("@") != -1) {
            let [_, domain] = email.split("@");
            if (domain !== "codecraft.tv") {
                return {
                    emailDomain: {
                        parsedDomain: domain
                    }
                }
            }
        }
        return null;
    }

}