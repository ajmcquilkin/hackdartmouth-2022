import { AppProps } from 'next/app';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../store/reducers';

const store = createStore(
    rootReducer, {},
    composeWithDevTools()
);

const CustomAppWrapper = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

export default CustomAppWrapper;
