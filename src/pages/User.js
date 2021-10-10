import React,{Component} from "react";
import Info from "../component/info";
import FaceImg from "../component/FaceImg";
import "./user.css";
class User extends Component{
    state={
        userInfo:{
            name:"Ahmed Ali",
            nationality:"Egyption",
            born:"7/11/1999",
            city:"Cairo",
            age:22,
            religion:"Muslim",
            type:"man"
        }
    }
    render(){
        return<div>
               <FaceImg/>
                <Info value={this.state.userInfo}/>
        </div>
    }
}export default User;