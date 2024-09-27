import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fields-input',
  templateUrl: './fields-input.component.html',
  styleUrl: './fields-input.component.scss'
})
export class FieldsInputComponent {

  public fieldsForm!: FormGroup;
  isPopupVisible = false;
  @Input() name!: string;
  @Input() email!: string;
  @Input() password!: string;
  @Input() passwordFieldIsHidden!: boolean;

  constructor(private router: Router, 
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.fieldsForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      email: ["", [Validators.required, Validators.maxLength(100)]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    })
  }

}
