/*
 * spurtcommerce community API
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty, IsEmail, MinLength, IsOptional} from 'class-validator';
export class CustomerRegisterRequest {
    @IsNotEmpty({
        message: 'username is required',
    })
    public name: string;

    @MinLength(5, {
        message: 'password is minimum 5 character',
    })
    @IsNotEmpty({
        message: 'password is required',
    })
    public password: string;

    @MinLength(5, {
        message: 'Confirm password is minimum 5 character',
    })
    @IsNotEmpty({
        message: 'Confirm password password is required',
    })
    public confirmPassword: string;
    @IsEmail({}, {
        message: 'Please provide valid emailId',
    })
    @IsNotEmpty({
        message: 'Email Id is required',
    })
    public emailId: string;

    @IsOptional()
    public phoneNumber: number;
}
