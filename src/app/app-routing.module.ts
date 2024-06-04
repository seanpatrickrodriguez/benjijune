import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user-management', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
  { path: 'user-management', loadChildren: () => import('./feature/user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: '**', redirectTo: 'user-management' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
