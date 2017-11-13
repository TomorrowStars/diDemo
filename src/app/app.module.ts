import { AnotherProductService } from './shared/another-product.service';
import { ProductService } from './shared/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from "./shared/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (logger:LoggerService, appConfig, isDev) => {
        if(appConfig.isDev && isDev){
          return new ProductService(logger);
        }else{
          return new AnotherProductService(logger);
        }
      },
      deps:[LoggerService, "APP_CONFIG", "IS_DEV"]
    }, 
  LoggerService,
    {
      provide: "APP_CONFIG", useValue: {isDev: true}
    },
    {
      provide: "IS_DEV", useValue: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
