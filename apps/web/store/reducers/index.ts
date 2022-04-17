import { combineReducers } from "redux";
import { RootAppState } from "schema";

import restaurantReducer from "./restarauntReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers<RootAppState>({
    restaurant: restaurantReducer,
    room: roomReducer
});

export default rootReducer;
