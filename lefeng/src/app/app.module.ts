import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuperSellComponent } from './components/super-sell/super-sell.component';
import { ClassifyComponent } from './components/classify/classify.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CarComponent } from './components/car/car.component';
import { MyComponent } from './components/my/my.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperSellComponent,
    ClassifyComponent,
    ShoppingComponent,
    CarComponent,
    MyComponent,
    GoodslistComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
