import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { LemonadeComponent } from './lemonade/lemonade.component'
import { ProductComponent } from './lemonade/product/product.component'
import { CardComponent } from './lemonade/card/card.component'
import { ConvertMeasurementPipe } from './lemonade/product/convert-measument.pipe'
import { GlassComponent } from './lemonade/glass/glass.component'
import { LiquidComponent } from './lemonade/glass/liquid/liquid.component'
import { WaveComponent } from './lemonade/glass/liquid/wave/wave.component'
import { CartComponent } from './cart/cart.component'
import { CartItemComponent } from './cart/cart-item/cart-item.component'
import { CartIconComponent } from './lemonade/cart-icon/cart-icon.component'
import { CustomerFormComponent } from './customer-form/customer-form.component'
import { InputComponent } from './customer-form/input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    LemonadeComponent,
    ProductComponent,
    CardComponent,
    ConvertMeasurementPipe,
    GlassComponent,
    LiquidComponent,
    WaveComponent,
    CartComponent,
    CartItemComponent,
    CartIconComponent,
    CustomerFormComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
