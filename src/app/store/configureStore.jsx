import React, { Component } from 'react';
import { createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './../reducers/rootReducer';

export const configureStore = (preloadState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storedEnhancers = [middlewareEnhancer];
    const composeEnhancer = composeWithDevTools(...storedEnhancers); 

    const store = createStore(
        rootReducer,
        preloadState,
        composeEnhancer
    );
    
    if(process.env.NODE_ENV !== 'production'){
        if(module.hot){
            module.hot.accept('../reducers/rootReducer', ()=>{
                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer);
            })
        }
    }

    return store;
}
