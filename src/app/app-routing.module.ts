import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [authGuard],
    loadChildren: () => import('./feature/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'user-management',
    canActivate: [guestGuard],
    loadChildren: () => import('./feature/user-management/user-management.module')
      .then(m => m.UserManagementModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
