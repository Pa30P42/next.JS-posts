import React from 'react'
import { Provider } from 'react-redux'
import {store, wrapper} from '../redux/store'

const MyApp = ({Component, pageProps}) => {
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    
}



export default wrapper.withRedux(MyApp);