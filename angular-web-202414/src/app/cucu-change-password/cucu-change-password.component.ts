import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cucu-change-password',
  templateUrl: './cucu-change-password.component.html',
  styleUrl: './cucu-change-password.component.scss'
})
export class CucuChangePasswordComponent {
  public passwordForm!: FormGroup;
  isPopupVisible = false;
  message = "Ha actualizado la contraseña exitosamente"

  constructor(private router: Router, 
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    })
  }

  onCancel() {
    this.passwordForm.reset();
    this.router.navigate(['/main-page']);
  }

  public createPassword(): void{
    this.isPopupVisible = true;
  }


  hidePopup() {
	  this.isPopupVisible = false;
    this.router.navigate(['/main-page']);
  }
}
