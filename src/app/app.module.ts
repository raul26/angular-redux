import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { metaReducer } from './common/index';

import { AppComponent } from './app.component';
import { TemplateModalComponent } from './template-modal/template-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateModalComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(metaReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
