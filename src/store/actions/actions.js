import { ADD_TO_CART , REMOVE_FROM_CART,CLEAR_CART} from "./tyoes";

export function addToCart(productInfo,quantity) { 
    return{
        type:ADD_TO_CART,
        productInfo,
        quantity
    }
 }

 export function  createRemoveFromCart(index) { 
    return{
        type:REMOVE_FROM_CART,
        index
    }
 }

 export function removeFromCart(index) { 
    return(dispatch)=>{
        dispatch(createRemoveFromCart(index));
    }
 }

 export function clearCart() { 
    return{
        type:CLEAR_CART,
        
    }
 }