import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCollectionRoutingModule } from './data-collection-routing.module';
import { DataCollectionComponent } from './data-collection.component';


@NgModule({
  declarations: [
    DataCollectionComponent
  ],
  imports: [
    CommonModule,
    DataCollectionRoutingModule
  ]
})
export class DataCollectionModule { }
