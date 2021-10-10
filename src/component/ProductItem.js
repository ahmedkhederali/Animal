import React from "react";
export default function ProductItem(props){
    return (
        <div className="card">
            <img src={props.value.image} className="card-img-top" alt={"img "+props.value.id}/>
            <div className="card-body">
                <h5 className="card-title">{props.value.name}</h5>
                <p className="card-text">
                   price  {props.value.price + "$"}</p>
                <a href={"/products/" +props.value.id}className="btn btn-primary">Details</a>
            </div>
        </div>
    );
}