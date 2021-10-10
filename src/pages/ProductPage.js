import React,{Component} from "react";
import ProductItem from "../component/ProductItem";
import {getAll} from "../api/products";

class ProductPage extends Component{
    state={
        loading:true,
        product:[],
    }
    componentDidMount(){
        getAll().then(data=>{
            setTimeout(()=>{
                this.setState({
                    product:data,
                    loading:false
                })
            },400);
        })
    }
    render(){
        if(this.state.loading)
            return <h3>loading....</h3>
        return (
        <div>
            <h1>Products</h1>
            <div className="row">
                {this.state.product.map((product,index)=>
                    <div key={index}  className={'col-4'}>
                        <ProductItem value={product}/>   
                    </div>
                )}
                
            </div>
        </div>
        )
    }
}export default ProductPage;