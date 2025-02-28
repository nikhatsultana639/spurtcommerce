/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
  loginSuccess: any;
  loginRequestLoading: boolean;
  loginRequestLoaded: boolean;
  loginRequestFailed: boolean;
  forgotPasswordResponse: boolean;
  forgotPasswordRequestLoading: boolean;
  forgotPasswordRequestLoaded: boolean;
  forgotPasswordRequestFailed: boolean;
}

export const AuthStateRecord = Record({
  // Initialize Default State Values

  loginSuccess: {},
  loginRequestLoading: false,
  loginRequestLoaded: false,
  loginRequestFailed: false,
  forgotPasswordResponse: false,
  forgotPasswordRequestLoading: false,
  forgotPasswordRequestLoaded: false,
  forgotPasswordRequestFailed: false
});
