/*
 * spurtcommerce community API
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { OrderTotal } from '../models/OrderTotal';

@EntityRepository(OrderTotal)
export class OrderTotalRepository extends Repository<OrderTotal>  {

}
