/*
 * spurtcommerce community API
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';

import { Manufacturer } from '../models/ManufacturerModel';

@EntityRepository(Manufacturer)
export class ManufacturerRepository extends Repository<Manufacturer>  {

}
