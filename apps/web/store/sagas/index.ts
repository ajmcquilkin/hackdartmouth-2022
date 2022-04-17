import { all, spawn } from 'redux-saga/effects';

import restaurantSaga from './restaurantSagas';
import roomSaga from './roomSagas';

function* rootSaga() {
    yield all([
        spawn(restaurantSaga),
        spawn(roomSaga)
    ]);
}

export default rootSaga;
