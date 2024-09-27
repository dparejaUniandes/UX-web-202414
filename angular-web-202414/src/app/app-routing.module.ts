import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { CucuChangePasswordComponent } from './cucu-change-password/cucu-change-password.component';
import { CucuMainPageComponent } from './cucu-main-page/cucu-main-page.component';
import { UpdateInformationComponent } from './update-information/update-information.component';
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'recover-password', component: RecoverPasswordComponent, pathMatch: 'full' },
  { path: 'main-page', component: CucuMainPageComponent },
  { path: 'update-information', component: UpdateInformationComponent },
  { path: 'change-password', component: CucuChangePasswordComponent },
  { path: 'registry', component: RegistryComponent },
  { path: '', component: CucuMainPageComponent },
  { path: '**', component: CucuMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
