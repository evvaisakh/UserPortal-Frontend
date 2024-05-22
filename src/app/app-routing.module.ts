import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  // http://localhost:4200
  { path: 'users', canActivate: [authGuard], loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
