/*
 * spurtcommerce community API
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty, MaxLength} from 'class-validator';

export class UpdateManufacturer {

    @IsNotEmpty()
    public manufacturerId: number;

    @MaxLength(30, {
        message: 'Name is maximum 30 character',
    })
    @IsNotEmpty()
    public name: string;

    public image: string;

    @IsNotEmpty()
    public sortOrder: number;

    @IsNotEmpty()
    public status: number;
}
