/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { AppState } from '../../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromseosettings from '../seo-reducer/seo-reducer';

export const getSeoState = (state: AppState) => state.seosetting;
export const getNewseo = createSelector(
  getSeoState,
  fromseosettings.getnewseo
);
export const getseo = createSelector(
  getSeoState,
  fromseosettings.getseo
);
