import { Action } from 'redux';

import { RestaurantActions, RestaurantActionTypes } from './restaurant';
import { RoomActions, RoomActionTypes } from './room';
import { SocketActions, SocketActionTypes } from './socket';

export type ActionStatus = 'REQUEST' | 'SUCCESS' | 'FAILURE';
export type AppActionBase<T, S extends ActionStatus> = Action<T> & { status: S };

export type Actions = RestaurantActions | RoomActions | SocketActions;
export type ActionTypes = RestaurantActionTypes | RoomActionTypes | SocketActionTypes;
