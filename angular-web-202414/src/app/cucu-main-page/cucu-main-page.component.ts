import { Component } from '@angular/core';

@Component({
  selector: 'app-cucu-main-page',
  templateUrl: './cucu-main-page.component.html',
  styleUrl: './cucu-main-page.component.scss'
})
export class CucuMainPageComponent {
  isPopupVisible = false;
  message = "Ha cerrado sesión satisfactoriamente"

  showPopup() {
	  this.isPopupVisible = true;
  }

  hidePopup() {
	  this.isPopupVisible = false;
  }
}
