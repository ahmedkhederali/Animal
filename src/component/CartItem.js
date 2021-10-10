import React from "react";
import { connect } from "react-redux";
import {removeFromCart} from "../store/actions/actions"
 function CartItem(props){
    const {item}=props;
     const {product}=item;// to select product object from object item which consist of product object , quantity value
    return (
        <div className="card">
            
            <img src={product.image} className="card-img-top" alt={"img "+product.id}/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                   price : {product.price + "$"}
                   <br/>
                   Quantity :{item.quantity}
                   <br/>
                   Total : {item.quantity * product.price + "$"}   
                </p>
                <button onClick={()=>props.removeFromCart(props.index)} className="btn btn-danger">
                    <i className="fa fa-trash"> </i> Delete
                </button>
            </div>
            
        </div>
    );
}

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         removeFromCart:(index)=>dispatch(removeFromCart(index)),
//     }
// }

export default connect(null,{removeFromCart})(CartItem)