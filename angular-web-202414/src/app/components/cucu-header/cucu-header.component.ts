import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-cucu-header',
  templateUrl: './cucu-header.component.html',
  styleUrl: './cucu-header.component.scss'
})
export class CucuHeaderComponent implements OnInit {
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

  openPopup() {
	  this.openModalCloseSession.emit();
  }
}
