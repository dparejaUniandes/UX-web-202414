import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CucuChangePasswordComponent } from './cucu-change-password/cucu-change-password.component';
import { CucuMainPageComponent } from './cucu-main-page/cucu-main-page.component';

const routes: Routes = [
  { path: 'main-page', component: CucuMainPageComponent },
  { path: 'change-password', component: CucuChangePasswordComponent },
  { path: '', component: CucuMainPageComponent },
  { path: '**', component: CucuMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
