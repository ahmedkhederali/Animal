import React from "react";
export default function FaceImg(){
    return <div>
         <div className="container text-center">
                    <div className="back-grounded" style={{ 
                        backgroundImage: `url("/imgs/background.jpg")`,
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center',
                        borderRadius:'10px'
                }}>
                        <div className="img-profile">
                            <img src="/imgs/person3.jpg" className="rounded-circle img-responsive" width="100%" />
                        </div>
                    </div>
                </div>
                <h1 className="text-center" style={{margin:" 83px 0 0 -38px"}}>Ahmed Ali</h1>
    </div>
}