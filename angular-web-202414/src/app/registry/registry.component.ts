import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.scss'
})
export class RegistryComponent {
  isPopupVisible = false;
  message = "¿Desea actualizar la información?";

  constructor(private router: Router) { }

  onCancel() {
    this.router.navigate(['/login']);
  }

  public storeInfo(): void{
    this.isPopupVisible = true;
  }

  hidePopup() {
	  this.isPopupVisible = false;
    this.router.navigate(['/login']);
  }

  noOptionRegistry() {
	  this.isPopupVisible = false;
  }

}
