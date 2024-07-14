import React from "react";
import {Link} from "react-router-dom";

const Confirmation =()=>{
    return(
        <>
            <div className="container">
                <div className="authorization">
                    <div className="auth">
                        <h1>ПОДТВЕРЖДЕНИЕ</h1>
                        <center className="obshinputauth">
                            <div className="inputauth">
                                <p>Введите код</p>
                                <input type="email"/>
                                <p style={{ marginTop: '10px' }}>мы отправили вам код для подтверждения на вашу почту</p>
                            </div>

                        </center>
                    
                        <center><Link to="/authorization/"><button className="buttonauth" style={{ marginTop: '78%' }}>ПОДТВЕРДИТЬ</button></Link></center>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Confirmation;