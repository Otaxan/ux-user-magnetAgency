import React from "react";
import {Link} from "react-router-dom";

const Registration =()=>{
    return(
        <>
            <div className="container">
                <div className="authorization">
                    <div className="auth">
                        <h1>РЕГИСТРАЦИЯ</h1>
                        <center className="obshinputauth">
                            <div className="inputauth">
                                <p>Ваш электронный адрес</p>
                                <input type="email"/>
                            </div>
                            <div className="inputauth" style={{ marginBottom: '1.5rem' }}>
                                <p>Ваш пароль</p>
                                <input type="password"/>
                            </div>
                            <div className="inputauth">
                                <p>Повторите пароль</p>
                                <input type="password"/>
                            </div>

                        </center>
                        <center><Link><button className="buttonauth">ЗАРЕГИСТРИРОВАТЬСЯ</button></Link></center>
                    </div>
                    <div className="noaccount1">
                        <p>У вас уже есть аккаунт?</p>
                        <Link to="/authorization/" className="linkauth1">Войти</Link>
                    </div>

                </div>
            </div>
        </>
    );
};


export default Registration;