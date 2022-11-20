import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdkComponent } from './sdk/sdk.component';
import { StagingComponent } from './staging/staging.component';

import { FlexibleClassroomComponent } from './flexible-classroom/flexible-classroom.component';
import { LiveComponent } from './live/live.component';
import { EndCallComponent } from './end-call/end-call.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SdkComponent,
    StagingComponent,
    FlexibleClassroomComponent,
    LiveComponent,
    EndCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
