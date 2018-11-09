import { NgModule } from '@angular/core';
import { SellsLegosAngularLibComponent } from './sells-legos-angular-lib.component';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SellsLegosAngularLibComponent, ListComponent],
  imports: [BrowserModule
  ],
  exports: [SellsLegosAngularLibComponent, ListComponent]
})
export class SellsLegosAngularLibModule { }
