import React,{Component} from "react";
import {clearCart} from "../store/actions/actions"
import { connect } from "react-redux";
import CartItem from "../component/CartItem";


class CartPage extends Component{
    placeOrder=()=>{
        this.props.clearCart();
        alert("WE RECIVED YOUR ORDER AND WE WORKING ON IT")
    }
    render(){
      
        return (
        <div>
            <h1>Cart</h1>
            <div className="row">
                {this.props.cartItem.map((item,index)=>
                    <div key={index}  className={'col-3'}>
                        {/* {console.log(item)}     contain quantity and product */}
                        <CartItem item={item} index={index}/>   
                        
                    </div>
                    
                )}
            </div>
            <br/>
                <h2>
                    Total : {this.props.total}$
                </h2>
                <button className ="btn btn-primary btn-block" onClick={this.placeOrder}>Order</button>
        </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        cartItem:state.cart,
        total:state.cart.reduce((total,item)=> total+ item.quantity* item.product.price,0),
        
      }
    
}

const mapDispatchToProps=(dispatch)=>{
    return{
        clearCart:()=>dispatch(clearCart()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage);