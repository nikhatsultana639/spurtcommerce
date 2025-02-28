/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
export class PersonalizeOrderResponseModel {
  public invoicePrefix: string;
  public orderStatus: number;

  constructor(Sitesettingresponse: any) {
    this.invoicePrefix = Sitesettingresponse.invoicePrefix || '';
    this.orderStatus = Sitesettingresponse.orderStatus || 0;
  }
}
