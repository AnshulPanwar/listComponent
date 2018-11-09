import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SellsLegosAngularLibModule } from 'sells-legos-angular-lib';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    SellsLegosAngularLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
