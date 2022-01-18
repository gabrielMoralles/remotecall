import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdkComponent } from './sdk/sdk.component';
import { StagingComponent } from './staging/staging.component';
import { GenerateTokenComponent } from './generate-token/generate-token.component';

@NgModule({
  declarations: [
    AppComponent,
    SdkComponent,
    StagingComponent,
    GenerateTokenComponent
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
