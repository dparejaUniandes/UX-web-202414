import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CucuHeaderComponent } from './components/cucu-header/cucu-header.component';
import { CucuMainPageComponent } from './cucu-main-page/cucu-main-page.component';
import {MatDividerModule} from '@angular/material/divider';
import { BodyMainPageComponent } from './components/body-main-page/body-main-page.component';
import { ModalInformationComponent } from './components/modal-information/modal-information.component';
import { CucuChangePasswordComponent } from './cucu-change-password/cucu-change-password.component';
import { FieldsInputComponent } from './components/fields-input/fields-input.component';
import { UpdateInformationComponent } from './update-information/update-information.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegistryComponent } from './registry/registry.component';
import { ModalQrComponent } from './components/modal-qr/modal-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    CucuHeaderComponent,
    CucuMainPageComponent,
    BodyMainPageComponent,
    ModalInformationComponent,
    CucuChangePasswordComponent,
    FieldsInputComponent,
    UpdateInformationComponent,
    RegistryComponent,
    ModalQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
