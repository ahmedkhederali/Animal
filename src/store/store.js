import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import throttle from "lodash.throttle"
import cartReducer from "./reducers";
function loadState(){
    try{
        const state=localStorage.getItem('cart'); // cart can be any name  but must have the same name in setItem Function()!!!!!
        console.log(state)
        if(state!==null){
            console.log(JSON.parse(state))
            return JSON.parse(state)
        }

    }catch(e){

    }
    return{
        cart:[]
    };
}
function saveState(state){
    console.log("ahmaaaaaa")
    localStorage.setItem('cart',JSON.stringify(state));// cart can be any name !!!!!
}
const appReducers=combineReducers({
    cart:cartReducer
});


// هذه الجملة علشان يشتغل redux devtools
const store=createStore(appReducers,loadState(),compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
store.subscribe(throttle(()=>{
    saveState(store.getState())
},2000));
export default store;