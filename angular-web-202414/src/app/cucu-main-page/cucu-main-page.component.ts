import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cucu-main-page',
  templateUrl: './cucu-main-page.component.html',
  styleUrl: './cucu-main-page.component.scss'
})
export class CucuMainPageComponent {
  isPopupVisible = false;
  isPopupVisibleQR = false;
  message = "Ha cerrado sesión satisfactoriamente"

  constructor(private router: Router) { }

  showPopup() {
	  this.isPopupVisible = true;
  }

  showPopupQR() {
	  this.isPopupVisibleQR = true;
  }

  hidePopup() {
	  this.isPopupVisible = false;
    this.router.navigate(['/login']);
  }

  hidePopupQR() {
	  this.isPopupVisibleQR = false;
  }
}
