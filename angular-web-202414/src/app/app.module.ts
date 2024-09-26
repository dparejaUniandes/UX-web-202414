import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CucuHeaderComponent } from './components/cucu-header/cucu-header.component';
import { CucuMainPageComponent } from './cucu-main-page/cucu-main-page.component';
import {MatDividerModule} from '@angular/material/divider';
import { BodyMainPageComponent } from './components/body-main-page/body-main-page.component';
import { ModalInformationComponent } from './components/modal-information/modal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    CucuHeaderComponent,
    CucuMainPageComponent,
    BodyMainPageComponent,
    ModalInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
