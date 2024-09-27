import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent {
    showSpinner: boolean;

    loginForm: FormGroup;

    show: boolean;


    errorStatus: number;

    errorMessage: string;

    errorIcon: string;

    isPopupVisible: boolean = false;

    message: string = "Revisa tu correo electrónico para recuperar tu cuenta";

    constructor(
      private fb: FormBuilder, private router: Router) {
      this.showSpinner = false;

      this.loginForm = this.fb.group({});

      this.show = false;

      
      this.errorStatus = -1;
      this.errorMessage = 'Ha ocurrido un error, por favor intente más tarde';
      this.errorIcon = 'error_blue.svg'
    }

    ngOnInit(): void {
      this.initializeForm();
    }
    
    /**
     * @description This function initializes the form
     */
    initializeForm(): void {
      this.loginForm = this.fb.group({
        user: ['', [Validators.required, 
                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }
    
    /**
     * @description This function validates a form field
     */
    validateForm(inputName: string): boolean {
      return this.loginForm.get(inputName)?.touched 
      && this.loginForm.get(inputName)?.hasError('required') ? true : false;
    }
    
    /**
     * @description This function validates that a field has focus
     */
    validateFocus(inputName: string): boolean {
      return this.loginForm.get(inputName)?.touched 
      && this.loginForm.get(inputName)?.dirty ? true : false;
    }
    
    /**
     * @description This function validates the structure of an email
     */
    validateEmail(inputName: string): boolean {
      return this.loginForm.get(inputName)?.touched 
      && this.loginForm.get(inputName)?.hasError('pattern') ? true : false;
    }
    
    /**
     * @description This function validates the length of a field
     */
    validateLength(inputName: string): boolean {
      return this.loginForm.get(inputName)?.touched 
      && this.loginForm.get(inputName)?.hasError('minlength') ? true : false;
    }
    
    /**
     * @description This function allows to display the password of 
     * the user who is typing
     */
    showPassword(): void {
      this.show = !this.show;
    }
    
    
    /**
     * @description This function redirects to specific page
     */
    redirectPage(page: string): void{
      window.location.href = "";
    }

    confirmation() {
      this.isPopupVisible = true;
    }

    hidePopup() {
      this.isPopupVisible = false;
      this.router.navigate(['/login']);
    }
}
