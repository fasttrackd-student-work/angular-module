import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LemonadeComponent } from './lemonade/lemonade.component';
import { ProductComponent } from './lemonade/product/product.component';
import { CardComponent } from './lemonade/card/card.component';
import { ConvertMeasurementPipe } from './lemonade/product/convert-measument.pipe';
import { GlassComponent } from './lemonade/glass/glass.component';
import { LiquidComponent } from './lemonade/glass/liquid/liquid.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonadeComponent,
    ProductComponent,
    CardComponent,
    ConvertMeasurementPipe,
    GlassComponent,
    LiquidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }