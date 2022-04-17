import { Actions, IRestaurantReducerState } from 'schema';

const initialState: IRestaurantReducerState = {
    restaurants: {}
};

const reducer = (state = initialState, action: Actions): IRestaurantReducerState => {
    if (action.status !== "SUCCESS") return state;
    
    switch (action.type) {
        case "FETCH_RESTAURANTS":
            return ({
                ...state,
                restaurants: action.restaurants.reduce((accum, r) => ({
                    ...accum,
                    [r.id]: r
                }), state.restaurants)
            });
            break;
        case "REVIEW_RESTAURANT":
            return ({
                ...state,
                restaurants: {
                    ...state.restaurants,
                    [action.restaurant.id]: action.restaurant
                }
            });
            break;
        default:
            return state;
            break;
    }
};

export default reducer;
