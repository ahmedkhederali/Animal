import React from "react";
export default function Info(props){
    return<div className="info">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="personal-information">
                    <i className="fa fa-user fa-5x "></i>
                    <p className="header-section">Personal Information</p>
                </div>
                <div>
                    <ol>
                        <li><b>Name: </b>{props.value.name}</li>
                        <li><b>Nationality: </b>{props.value.nationality}</li>
                        <li><b>Place Born: </b>{props.value.born}</li>
                        <li><b>City: </b>{props.value.city}</li>
                        <li><b>Age: </b>{props.value.age}</li>
                        <li><b>religion: </b>{props.value.religion}</li>
                        <li><b>Type: </b>{props.value.type}</li>
                    </ol>
                </div>
            </div>
            <div className="col-md-4">
                 <div className="personal-information">
                    <i className="fa fa-weixin fa-5x "></i>
                    <p className="header-section" style={{letterSpacing:"6px"}}>Social Media </p>
                </div>
               <div>
                   <div className="social">
                        <i className="fa fa-facebook fa-lg face"></i>
                        <b className="users-info"><a href="https://www.linkedin.com/in/ahmed-ali-53a449215/">Facebook</a></b>
                   </div>
                   <div className="social">
                        <i className="fa fa-twitter fa-lg twitter"></i>
                        <b className="users-info"><a href="https://www.linkedin.com/in/ahmed-ali-53a449215/">Twitter</a></b>
                   </div>
                   <div className="social">
                        <i className="fa fa-instagram fa-lg instagram"></i>
                        <b className="users-info"><a href="https://www.linkedin.com/in/ahmed-ali-53a449215/">Instagram</a></b>
                   </div>
                   <div className="social">
                        <i className="fa fa-linkedin fa-lg linkedin"></i>
                        <b className="users-info"><a href="https://www.linkedin.com/in/ahmed-ali-53a449215/">Linkedin</a></b>
                   </div>
                    
                </div>

            </div>
            <div className="col-md-4">
                <div className="personal-information">
                        <i className="fa fa-university fa-5x "></i>
                        <p className="header-section">Purchases and Account</p>
                </div>
              <div className="row">
                    <div className="col-md-3">
                            <img src="/imgs/cat6.jpg" className="img-responsive" width="100%"/>
                    </div>
                    <div className="col-md-9">
                        <div className="cat-info">
                            <b>Name:</b> White Cat<br/>
                            <b>price:</b> 200$
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="col-md-3">
                            <img src="/imgs/cat11.jpg" className="img-responsive" width="100%"/>
                    </div>
                    <div className="col-md-9">
                        <div className="cat-info">
                            <b>Name:</b> Smile Cat<br/>
                            <b>price:</b> 3400$
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="col-md-3">
                            <img src="/imgs/cat10.jpg" className="img-responsive" width="100%"/>
                    </div>
                    <div className="col-md-9">
                        <div className="cat-info">
                            <b>Name:</b> Good Cat<br/>
                            <b>price:</b> 900$
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </div>
</div>
}