import React,{Component} from "react";
import {getById} from "../api/products";
import {connect} from "react-redux";
import { addToCart } from "../store/actions/actions";
class Product extends Component{
    state={
        loading:true,
        quantity:2,
        product:{}
    }
   componentDidMount(){
    //    console.log(this.props)
       const id=this.props.match.params.id;
        getById(parseInt(id)).then(data=>{
            
            setTimeout(()=>{
                this.setState({
                    product:data,
                    loading:false
                })
            },400)
        })

   }
   handleQuantity=(e)=>{
    this.setState({
        quantity:e.target.value
    })
   }
   addToCart=(product)=>{
    this.props.addToCart(this.state.product,this.state.quantity)
   }
    render(){
        if(this.state.loading)
            return <h3>loading...</h3>
        
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.product.image} width="100%"/>
                    </div>
                    <div className="col-md-6">
                    <h1>{this.state.product.name}</h1>
                    <p><b>price :</b> {this.state.product.price} <sub>$</sub></p>
                    <p>{this.state.product.description}</p>
                    <input 
                        type="number"
                        value={this.state.quantity }
                        onChange={this.handleQuantity}
                        min="0"
                        style={{width:"100%",}}
                        />
                    <br/>
                    <span 
                        style={{display:'block',padding:'10px 0'}}
                    ><b>Total</b> :{this.state.quantity * this.state.product.price} $</span>
                    <button className="btn btn-primary btn-block" onClick={()=>this.addToCart()}>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart:(productInfo,quantity)=>dispatch(addToCart(productInfo,quantity)),
    }
}
export default connect(null,mapDispatchToProps)(Product)