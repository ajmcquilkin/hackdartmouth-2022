import { AppActionBase } from "./actions";

export interface IRestaurant {
    id: string;
    name: string;
    imageUrl: string;
    rating: number;
    displayAddress: string[];
    categories: string[];
    history: string;
    price: string;
    reviews: string[];
    reviewCount: number;
};

export interface IRestaurantReducerState {
    restaurants: Record<string, IRestaurant>;
}

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const REVIEW_RESTAURANT = 'REVIEW_RESTAURANT';

export type FetchRestaurantsRequest = AppActionBase<typeof FETCH_RESTAURANTS, 'REQUEST'> & {};
export type FetchRestaurantsSuccess = AppActionBase<typeof FETCH_RESTAURANTS, 'SUCCESS'> & { restaurants: IRestaurant[] };
export type FetchRestaurantsFailure = AppActionBase<typeof FETCH_RESTAURANTS, 'FAILURE'> & { message: string };

export type ReviewRestaurantRequest = AppActionBase<typeof REVIEW_RESTAURANT, 'REQUEST'> & { restaurant: IRestaurant };
export type ReviewRestaurantSuccess = AppActionBase<typeof REVIEW_RESTAURANT, 'SUCCESS'> & { restaurant: IRestaurant };
export type ReviewRestaurantFailure = AppActionBase<typeof REVIEW_RESTAURANT, 'FAILURE'> & { message: string };

export type RestaurantActions = FetchRestaurantsRequest | FetchRestaurantsSuccess | FetchRestaurantsFailure
    | ReviewRestaurantRequest | ReviewRestaurantSuccess | ReviewRestaurantFailure;

export type RestaurantActionTypes = typeof FETCH_RESTAURANTS | typeof REVIEW_RESTAURANT;
