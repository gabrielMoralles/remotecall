import { StagingComponent } from './staging/staging.component';
import { SdkComponent } from './sdk/sdk.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user/:id',
    component: SdkComponent,
  },
  {
    path: 'staging/:id',
    component: StagingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
