import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-cucu-header',
  templateUrl: './cucu-header.component.html',
  styleUrl: './cucu-header.component.scss'
})
export class CucuHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
      if (typeof document !== 'undefined') {
        // Bootstrap tooltip initialization
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })       
    }
  }

  @Output() openModalCloseSession = new EventEmitter<void>();
  @Output() openModalCloseSessionQR = new EventEmitter<void>();

  openPopup() {
	  this.openModalCloseSession.emit();
  }

  openPopupQR() {
	  this.openModalCloseSessionQR.emit();
  }

}
