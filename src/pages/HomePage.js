import React,{Component} from "react";
import "../home.css";
class HomePage extends Component{
    render(){
        return (
        <div>
            <div className="container text-center">
                <h1 className="first-header">Welcome To Our Animal Store</h1>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100 slider-img" src="./imgs/cat6.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100 slider-img" src="./imgs/elephant.jpeg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100 slider-img" src="./imgs/dog2.jpeg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100 slider-img" src="./imgs/asfor.jpeg" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="features ">
                <div className="container text-center">
                   <div className="row">
                        <div className="col-md-3">
                            <div className="box">
                                <i className="fa fa-fax fa-2x"></i>
                                <h3 className="upper">Phone</h3>
                                <p>Contact with us :<br/> 01018036153 </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <i className="fa fa-desktop fa-2x"></i>
                                <h3 className="upper">Animal </h3>
                                <p>We have alot of animal and you and buy anyone.<br/> </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <i className="fa fa-mobile fa-2x"></i>
                                <h3 className="upper">app design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <i className="fa fa-pencil-square-o  fa-2x"></i>
                                <h3 className="upper">logo design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> </p>
                            </div>
                        </div>
                   </div>
                    
                </div>
            </div>
            <div className="subscribe">
                <div className="overlay">
                    <form>
                        <input 
                        type="email"
                        name="email" 
                        required 
                        placeholder="Enter Your Email address for newletters"
                        autoComplete="off"
                        className="email-input"/>
                        <button className="upper">subscribe</button>
                    </form>
                </div>
            </div>
           
            <div className="our-team text-center">
                <div className="container">
                    <h2 className="upper">Owner<span className="main-color">Store</span></h2>
                    <p className="main">Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Adipisci inventore qui vel fugiat. <br/></p>
                    <div className="the-team">
                        <div className="row">
                            <div className="col-md-3"> 
                                <div className="person">
                                    <img src="./imgs/ahmed.jpg" alt="img-1"/>
                                    <h3 className="">Ahmed ali</h3>
                                    <div className="social-icons">
                                        <i className="fa fa-facebook"></i>
                                        <i className="fa fa-twitter"></i>
                                        <i className="fa fa-google-plus"></i>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet <br/>
                                        Lorem, ipsum dolor sit amet 
                                    </p>
                                </div>
                            </div> 
                            <div className="col-md-3">
                                <div className="person">
                                    <img src="./imgs/rofida.jpg" alt="img-1"/>
                                    <h3 className="">Asala ali</h3>
                                    <div className="social-icons">
                                        <i className="fa fa-facebook"></i>
                                        <i className="fa fa-twitter"></i>
                                        <i className="fa fa-google-plus"></i>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet <br/>
                                        Lorem, ipsum dolor sit amet 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="person">
                                    <img src="./imgs/person3.jpg" alt="img-1"/>
                                    <h3 className="">Tamer ali</h3>
                                    <div className="social-icons">
                                        <i className="fa fa-facebook"></i>
                                        <i className="fa fa-twitter"></i>
                                        <i className="fa fa-google-plus"></i>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet <br/>
                                        Lorem, ipsum dolor sit amet 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="person">
                                    <img src="./imgs/team3.jpg" alt="img-1"/>
                                    <h3 className="">Mohamed ali</h3>
                                    <div className="social-icons">
                                        <i className="fa fa-facebook"></i>
                                        <i className="fa fa-twitter"></i>
                                        <i className="fa fa-google-plus"></i>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet <br/>
                                        Lorem, ipsum dolor sit amet 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        <div className="footer">
            <div className="container">
                <span className="copyRight">Copyright &copy; 2021</span>
                <span className="design upper">design by Ahmed Ali</span>
            </div>
        </div>
       
       
        </div>)
        
    }
}export default HomePage;