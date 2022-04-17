// @ts-nocheck
import { AppProps } from 'next/app';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../store/reducers';
import rootSaga from '../store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, {},
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

const CustomAppWrapper = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default CustomAppWrapper;
