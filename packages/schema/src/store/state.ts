import { IRestaurantReducerState } from "./restaurant";
import { IRoomReducerState } from "./room";

export type RootAppState = {
    restaurant: IRestaurantReducerState,
    room: IRoomReducerState
};
