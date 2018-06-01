import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { AppComponent } from './app.component';
import {apiServiceManager} from './api.services';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSelectModule, MatInputModule,MatProgressBarModule, MatButtonModule , MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    MatSelectModule, MatInputModule, MatButtonModule , MatToolbarModule , MatProgressBarModule
  ],
  providers: [apiServiceManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
