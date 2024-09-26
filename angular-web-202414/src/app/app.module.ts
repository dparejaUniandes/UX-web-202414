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

@NgModule({
  declarations: [
    AppComponent,
    CucuHeaderComponent,
    CucuMainPageComponent,
    BodyMainPageComponent,
    ModalInformationComponent,
    CucuChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
