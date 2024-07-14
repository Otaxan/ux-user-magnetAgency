import React, {useEffect} from "react";
import {Link} from "react-router-dom";


const ChangePassword5=()=>{

    useEffect(() => {
        document.title = "Изменить пароль";
    }, []);

    return(
        <>
            <div className="container">
                <Link to="/my_profile">
                <div className="closechange">
                    <div className="bar1 open"></div>
                    <div className="bar2 open"></div>
                    <div className="bar3 open"></div>
                </div>
                </Link>
                <form className="change">
                    <div className="options">
                        <p>Старый пароль</p>
                        <input type="password"/>
                    </div>
                    <div className="options">
                        <p>Новый пароль</p>
                        <input type="password"/>
                    </div>
                    <div className="options">
                        <p>Повторите новый пароль</p>
                        <input type="password"/>
                    </div>
                    <Link to="/my_profile/"><button>Установить</button></Link>
                </form>
            </div>
        </>
    );
};

export default ChangePassword5;