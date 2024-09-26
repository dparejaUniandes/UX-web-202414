import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal-information',
  templateUrl: './modal-information.component.html',
  styleUrl: './modal-information.component.scss'
})
export class ModalInformationComponent {
  @Input() message!: string;
  @Output() closeEvent = new EventEmitter<void>();

  closePopup() {
	  this.closeEvent.emit();
  }
}
