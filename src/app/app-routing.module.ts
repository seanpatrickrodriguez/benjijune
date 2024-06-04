import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
  { path: 'user-management', loadChildren: () => import('./feature/user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'reporting', loadChildren: () => import('./feature/reporting/reporting.module').then(m => m.ReportingModule) },
  { path: 'data-collection', loadChildren: () => import('./feature/data-collection/data-collection.module').then(m => m.DataCollectionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
