import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCollectionComponent } from './data-collection.component';

const routes: Routes = [{ path: '', component: DataCollectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCollectionRoutingModule { }
