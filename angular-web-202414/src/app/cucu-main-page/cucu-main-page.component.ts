import { Component } from '@angular/core';

@Component({
  selector: 'app-cucu-main-page',
  templateUrl: './cucu-main-page.component.html',
  styleUrl: './cucu-main-page.component.scss'
})
export class CucuMainPageComponent {
  isPopupVisible = false;
  isPopupVisibleQR = false;
  message = "Ha cerrado sesión satisfactoriamente"

  showPopup() {
	  this.isPopupVisible = true;
  }

  showPopupQR() {
	  this.isPopupVisibleQR = true;
  }

  hidePopup() {
	  this.isPopupVisible = false;
  }

  hidePopupQR() {
	  this.isPopupVisibleQR = false;
  }
}
