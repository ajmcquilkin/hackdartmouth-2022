import { 
    FetchRestaurantsFailure, FetchRestaurantsRequest, FetchRestaurantsSuccess,
    ReviewRestaurantFailure, ReviewRestaurantRequest, ReviewRestaurantSuccess
} from "schema/src/store/restaurant";

import { IRestaurant } from "schema";

export const fetchRestaurantsRequest = (): FetchRestaurantsRequest => ({
    type: "FETCH_RESTAURANTS",
    status: "REQUEST"
});

export const fetchRestaurantsSuccess = (restaurants: IRestaurant[]): FetchRestaurantsSuccess => ({
    type: "FETCH_RESTAURANTS",
    status: "SUCCESS",
    restaurants
});

export const fetchRestaurantsFailure = (message: string): FetchRestaurantsFailure => ({
    type: "FETCH_RESTAURANTS",
    status: "FAILURE",
    message
});

export const reviewRestaurantRequest = (roomId: string, restaurant: IRestaurant): ReviewRestaurantRequest => ({
    type: "REVIEW_RESTAURANT",
    status: "REQUEST",
    roomId,
    restaurant
});

export const reviewRestaurantSuccess = (restaurant: IRestaurant): ReviewRestaurantSuccess => ({
    type: "REVIEW_RESTAURANT",
    status: "SUCCESS",
    restaurant
});

export const reviewRestaurantFailure = (message: string): ReviewRestaurantFailure => ({
    type: "REVIEW_RESTAURANT",
    status: "FAILURE",
    message
});
