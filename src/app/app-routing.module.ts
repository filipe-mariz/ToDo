import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LandingComponent } from './landing/landing.component';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
//import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  /*{path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createuser', component: RegisterComponent},
  {path: 'createaction', component: TodoComponent}*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
