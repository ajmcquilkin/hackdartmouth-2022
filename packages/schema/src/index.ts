import { AppActionBase, ActionStatus, Actions, ActionTypes } from './store/actions';
import { IRestaurant, IRestaurantReducerState, RestaurantActions, RestaurantActionTypes } from './store/restaurant';
import { IRoom, IRoomReducerState, RoomActions, RoomActionTypes } from './store/room';
import { RootAppState } from './store/state';

export type { 
    AppActionBase, ActionStatus, Actions, ActionTypes,
    IRestaurant, IRestaurantReducerState, RestaurantActions, RestaurantActionTypes,
    IRoom, IRoomReducerState, RoomActions, RoomActionTypes,
    RootAppState
};
