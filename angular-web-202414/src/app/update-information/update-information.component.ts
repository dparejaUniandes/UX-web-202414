import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-information',
  templateUrl: './update-information.component.html',
  styleUrl: './update-information.component.scss'
})
export class UpdateInformationComponent {

  name = "Pepito Pérez"
  email= "pepito@gmail.com"
  passwordFieldIsHidden = true
  isPopupVisible = false;
  message = "¿Desea actualizar la información?";

  constructor(private router: Router) { }

  onCancel() {
    this.router.navigate(['/main-page']);
  }

  public storeInfo(): void{
    this.isPopupVisible = true;
  }

  hidePopup() {
	  this.isPopupVisible = false;
    this.router.navigate(['/main-page']);
  }

  noOption() {
	  this.isPopupVisible = false;
  }

}
