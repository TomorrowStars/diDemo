import { ProductService, Product } from './product.service';
import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService {
  
  // constructor() { }
    constructor(public loggerService: LoggerService) { }
  
  getProduct(): Product {
    return new Product(1, "Galaxy Note8", 4899, "最新款三星手机。");
  }


}
