import React from 'react';
import ReactDOM from 'react-dom';
// curly braces mean named import
// P is capital for provider because it is a component
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}> 
        <App/>
    </Provider>,
    document.querySelector('#root'));
