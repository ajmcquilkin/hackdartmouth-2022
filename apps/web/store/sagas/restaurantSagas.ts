import { all, call, takeLatest } from "redux-saga/effects";

import { IRestaurant } from "schema";
import { FetchRestaurantsRequest, ReviewRestaurantRequest } from "schema/src/store/restaurant";

import * as restaurantService from "../../services/restaurantService";
import { fetchRestaurantsFailure, fetchRestaurantsSuccess, reviewRestaurantSuccess, reviewRestaurantFailure } from "../actionCreators/restaurantActionCreators";
import { selectStatus, typedPut as put } from "./helpers";


function* fetchRestaurantsWorker(action: FetchRestaurantsRequest) {
    if (action.status !== 'REQUEST') return;
    
    try {
        const result: IRestaurant[] = yield call(restaurantService.fetchRestaurants);
        yield put(fetchRestaurantsSuccess(result));
    } catch (error) {
        yield put(fetchRestaurantsFailure((error as Error).message));
    }
}

function* reviewRestaurantWorker(action: ReviewRestaurantRequest) {
    if (action.status !== 'REQUEST') return;
    
    try {
        const result: IRestaurant = yield call(restaurantService.reviewRestaurant, action.roomId, action.restaurant);
        yield put(reviewRestaurantSuccess(result));
    } catch (error) {
        yield put(reviewRestaurantFailure((error as Error).message));
    }
}

function* roomSaga() {
    yield all([
        takeLatest('FETCH_RESTAURANTS', fetchRestaurantsWorker),
        takeLatest('REVIEW_RESTAURANT', reviewRestaurantWorker),
    ]);
}

export default roomSaga;
