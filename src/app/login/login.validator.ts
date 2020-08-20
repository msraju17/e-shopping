import { AbstractControl, ValidationErrors } from '@angular/forms';


export class LoginValidator{

    static usernameCheck(control: AbstractControl): ValidationErrors | null{

        if(control.value.toLowerCase() != "admin")
        {
            return({usernameCheck: true});
        }
        return null;

    }
}