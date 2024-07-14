import React from "react";
import {Link} from "react-router-dom";

const Authorization =()=>{
    return(
        <>
            <div className="container">
                <div className="authorization">
                    <div className="auth">
                        <h1>АВТОРИЗАЦИЯ</h1>
                        <center className="obshinputauth">
                            <div className="inputauth">
                                <p>Ваш электронный адрес</p>
                                <input type="email"/>
                            </div>
                            <div className="inputauth">
                                <p>Ваш пароль</p>
                                <input type="password"/>
                            </div>

                        </center>
                        <Link to="/forgot_password" className="linkauth"><p>Забыли пароль?</p></Link>
                        <center><Link to="/all_offers/"><button className="buttonauth">ВОЙТИ</button></Link></center>
                    </div>
                    <div className="noaccount">
                        <p>У вас нет аккаунта?</p>
                        <Link to="/registration/" className="linkauth1">Зарегистрироваться</Link>
                    </div>

                </div>
            </div>
        </>
    );
};


export default Authorization;