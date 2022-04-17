import { all, spawn } from 'redux-saga/effects';

import restaurantSaga from './restaurantSagas';
import roomSaga from './roomSagas';
import socketSaga from './socketSagas';

function* rootSaga() {
    yield all([
        spawn(restaurantSaga),
        spawn(roomSaga),
        spawn(socketSaga)
    ]);
}

export default rootSaga;
