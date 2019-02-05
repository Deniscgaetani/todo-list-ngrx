import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../products/shared/material-module';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

// components
import * as fromComponents from './components';
// services
import * as fromServices from './shared/services';
// containers
import * as fromContainers from './containers';
// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.TodoComponent,
  }
];
@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(ROUTES),
      StoreModule.forFeature('products', reducers),
      EffectsModule.forFeature(effects),
    ],
    providers: [...fromServices.services],
    declarations: [...fromComponents.components, fromContainers.containers],
    exports: [...fromComponents.components, fromContainers.containers],
    entryComponents: [...fromComponents.components, fromContainers.containers],
  })
export class ProductsModule {}
