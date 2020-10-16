import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState={
    authentication:{
        loading:false,
    token:null,
    email:null,
    loginErrorMessage:null,
    loggedIn:false
    }

}

const middleware = [thunk]

function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    } catch (err) {
        console.log(err)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedState=localStorage.getItem('state')
        if(serializedState==null) return initialState
        return JSON.parse(serializedState)
    } catch (err) {
        console.log(err)
        return undefined
    }
}
const persistedState = loadFromLocalStorage()
const store = createStore(rootReducer,persistedState,composeWithDevTools(applyMiddleware(...middleware)));
store.subscribe(()=>saveToLocalStorage(store.getState()))
console.log('store',store)
export default store