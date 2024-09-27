import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal-information',
  templateUrl: './modal-information.component.html',
  styleUrl: './modal-information.component.scss'
})
export class ModalInformationComponent {
  @Input() message!: string;
  @Output() closeEvent = new EventEmitter<void>();
  @Output() noOptionEvent = new EventEmitter<void>();
  @Input() imageInterrogationIsPresent!: boolean;
  @Input() showTwoButtons!: boolean;
  @Input() buttonNameOne!: string;
  @Input() buttonNameTwo!: string;

  closePopup() {
	  this.closeEvent.emit();
  }

  noOption() {
	  this.noOptionEvent.emit();
  }
}
