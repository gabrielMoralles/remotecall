import { StagingComponent } from './staging/staging.component';
import { SdkComponent } from './sdk/sdk.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexibleClassroomComponent } from './flexible-classroom/flexible-classroom.component';
import { LiveComponent } from './live/live.component';
import { EndCallComponent } from './end-call/end-call.component';

const routes: Routes = [
  {
    path: 'user/:id',
    component: SdkComponent,
  },
  {
    path: 'staging/:id',
    component: StagingComponent,
  },
  {
    path: 'classroom',
    component: FlexibleClassroomComponent,
  },
  {
    path: 'live',
    component: LiveComponent,
  },
  {
    path: 'endcall',
    component: EndCallComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
