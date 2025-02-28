/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencysymbol' })
export class CurrencySymbolPipe implements PipeTransform {
  currentSymbol: any;
  constructor() {
    // this.currentSymbol = JSON.parse(localStorage.getItem('adminCurrency'));
  }
  transform(value: string, obj: any): string {
    this.currentSymbol = obj;
    if (this.currentSymbol) {
      if (this.currentSymbol.position === 'right') {
        return value + ' ' + this.currentSymbol.symbol;
      } else if (this.currentSymbol.position === 'left') {
        return this.currentSymbol.symbol + ' ' + value;
      } else {
        return value;
      }
    } else {
      return value;
    }
  }
}
