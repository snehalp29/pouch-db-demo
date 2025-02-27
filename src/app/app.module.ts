import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { PouchDbInteractionComponent } from './components/pouch-db-interaction/pouch-db-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PouchDbInteractionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
