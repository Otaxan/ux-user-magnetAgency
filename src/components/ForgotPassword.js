import React from "react";
import {Link} from "react-router-dom";

const Confirmation =()=>{
    return(
        <>
            <div className="container">
                <div className="authorization">
                    <div className="auth">
                        <h1>ЗАБЫЛЫ ПАРОЛЬ?</h1>
                        <center className="obshinputauth">
                            <div className="inputauth">
                                <p style={{ fontSize: '13px' }}>Ваш электронный адрес</p>
                                <input type="email"/>
                                <p style={{ marginTop: '10px', fontSize: '13px' }}>напишите ваш электронный адрес и мы отправим на него одноразовый пароль для авторизации</p>
                            </div>

                        </center>
                    
                        <center><Link to="/confirmation/"><button className="buttonauth" style={{ marginTop: '78%' }}>ПОДТВЕРДИТЬ</button></Link></center>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Confirmation;