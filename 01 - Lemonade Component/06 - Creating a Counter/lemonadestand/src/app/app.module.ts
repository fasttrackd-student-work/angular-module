import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LemonadeComponent } from './lemonade/lemonade.component';
import { ProductComponent } from './lemonade/product/product.component';
import { CardComponent } from './lemonade/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonadeComponent,
    ProductComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
