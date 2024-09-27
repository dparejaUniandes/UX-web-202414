import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal-qr',
  templateUrl: './modal-qr.component.html',
  styleUrl: './modal-qr.component.scss'
})
export class ModalQrComponent {

  @Output() closeEvent = new EventEmitter<void>();

  closePopup() {
	  this.closeEvent.emit();
  }

}
