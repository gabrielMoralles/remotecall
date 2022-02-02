import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdkComponent } from './sdk/sdk.component';
import { StagingComponent } from './staging/staging.component';
import { GenerateTokenComponent } from './generate-token/generate-token.component';
import { FlexibleClassroomComponent } from './flexible-classroom/flexible-classroom.component';
import { LiveComponent } from './live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    SdkComponent,
    StagingComponent,
    GenerateTokenComponent,
    FlexibleClassroomComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
