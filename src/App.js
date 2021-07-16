import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './services/store/configureStore';
import Routes from './config/Routes/routes';

const store = configureStore();

function App() {
    return (
        <>
            <Provider store={store}>
                <div className='App'>
                    <Routes />
                </div>
            </Provider>
        </>
    );
}

export default App;
